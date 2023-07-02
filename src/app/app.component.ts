import {Component, OnInit} from '@angular/core';
import {CodeInfo, Codes, CodeType, CodeTypeNames} from './data/codes';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {catchError, debounceTime, switchMap, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as moment from 'moment';
import {ActivationEnd, Router} from "@angular/router";


interface GuardianInfo {
  bnetId: number;
  bungieName: string;
  displayName: string;
  membershipId: number;
  membershipType: number;
  emblemHash: string;
  crossSaveOverride: any;
  score: number;
  lastPlayed: string;

}

enum State {
  Unknown,
  NotRewarded,
  Rewarded
}

interface ExtCode extends CodeInfo {
  state: State
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Codes: ExtCode[] = [];
  CodeTypeNames = CodeTypeNames;
  guardianSearchFormControl = new FormControl();
  users: GuardianInfo[] = [];

  currentUserMembershipId: number = 0;
  errorMessage: string = "";
  filterCrossplay: boolean = true;

  public loading: boolean = false;
  public usedFallback: boolean = false;
  public unclaimedCodesCount: number = 0;
  _availableTypes: CodeType[] = [];


  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {
  }

  updateUnclaimedCodesCount() {
    this.unclaimedCodesCount = this.Codes.filter(c => c.state == State.NotRewarded).length;
    console.log("updateUnclaimedCodesCount", this.unclaimedCodesCount, {codes: this.Codes}, )
  }

  resetCodeStates() {
    this.Codes = Codes.sort((a, b) => a.name > b.name ? 1 : -1)
      .map(code => {
        return Object.assign({state: State.Unknown}, code)
      })
    this.unclaimedCodesCount = 0;
  }

  async resetUrl() {
    await this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.resetCodeStates()

    this._availableTypes = Array.from(this.Codes.reduce((p,v) => p.add(v.type), new Set<CodeType>()))


    this.guardianSearchFormControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(changedValue => this.searchUsers(changedValue)),
    ).subscribe(users => this.users = users);

    this.router.events.subscribe(async (k) => {
      if (k instanceof ActivationEnd) {
        let k1 = k as ActivationEnd;
        let keys = Object.keys(k1.snapshot.params);
        if (k1.snapshot.data["guardianLinked"] && keys.indexOf("membershipId") > -1 && keys.indexOf("membershipType") > -1) {
          var membershipId = k1.snapshot.params["membershipId"]
          var membershipType = k1.snapshot.params["membershipType"]
          console.log("Update Guardian", membershipId, membershipType)

          if (this.users.length == 0) {
            this.getUser(membershipType, membershipId).then(us => {
              if (us != null) {
                try {
                  this.users.push({
                    crossSaveOverride: us["Response"]["profile"]["data"]["userInfo"]["crossSaveOverride"],
                    membershipType: membershipType,
                    membershipId: membershipId,
                    displayName: us["Response"]["profile"]["data"]["userInfo"]["displayName"],
                    bungieName: us["Response"]["profile"]["data"]["userInfo"]["bungieGlobalDisplayName"]
                      + "#"
                      + us["Response"]["profile"]["data"]["userInfo"]["bungieGlobalDisplayNameCode"],
                  } as GuardianInfo)
                } catch (e) {
                  console.error("Could not parse userdata.", e)
                }
              }
            })
          }

          this.filterCollectibles(membershipType, membershipId);
        } else {
          this.users = []
          if (this.router.url != "/")
            await this.resetUrl();
          this.resetCodeStates();
        }

      }
    })

  }

  async searchUsers(name: string) {
    await this.resetUrl();
    console.log(name, !!name)
    if (!name)
      return [];
    this.loading = true;

    this.usedFallback = false;
    const url = "https://elastic.destinytrialsreport.com/players/0/" + encodeURIComponent(encodeURIComponent(name));
    let users = await this.http.get<GuardianInfo[]>(url)
      .pipe(
        tap(_ => console.log('fetched characters')),
        catchError(this.handleTrialsReportUrlError(name))
      ).toPromise();

    users = users
      .sort((a, b) => {
        let d1 = moment(a.lastPlayed, "YYYY-MM-DDTHH:mm:ss:SSSZ").fromNow();
        let d2 = moment(b.lastPlayed, "YYYY-MM-DDTHH:mm:ss:SSSZ").fromNow();
        return d1 > d2 ? 1 : 0;
      })

    if (!this.filterCrossplay) {
      this.loading = false;
      return users;
    }
    let userMap = users.reduce((previousValue, currentValue, currentIndex) => {
      var key = currentValue.membershipId + "-" + currentValue.membershipType;
      if (currentValue.crossSaveOverride.membershipId != "") {
        if (currentValue.crossSaveOverride.membershipId != currentValue.membershipId
          && currentValue.crossSaveOverride.membershipType != currentValue.membershipType)
          return previousValue;
        else {
          key = currentValue.crossSaveOverride.membershipId + "-" + currentValue.crossSaveOverride.membershipType
        }
      }
      if (previousValue[key]) return previousValue;
      previousValue[key] = currentValue;
      return previousValue;
    }, {} as { [name: string]: any })

    this.loading = false;
    return Object.keys(userMap).map(function (key: any) {
      return userMap[key];
    }).slice(0, 10);
  }

  async navigate(membershipType: number, membershipId: number) {
    await this.router.navigate([membershipType, membershipId])
  }

  async getUser(membershipType: number, membershipId: number) {
    const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=100`;
    return await this.http.get<any>(url, {
      headers: {"X-API-Key": "d740f7aa26874fd59aa0a09ce0c47fd6"}
    }).pipe(
      tap(_ => console.log(`fetched username for ${membershipType} ${membershipId}`)),
      catchError(e => this.handleError(e))
    ).toPromise();
  }

  async filterCollectibles(membershipType: number, membershipId: number) {
    this.loading = true;
    this.errorMessage = "";
    this.resetCodeStates();

    this.currentUserMembershipId = membershipId;
    const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=800`;
    const result = await this.http.get<any>(url, {
      headers: {"X-API-Key": "d740f7aa26874fd59aa0a09ce0c47fd6"}
    }).pipe(
      tap(_ => console.log('fetched collectibles')),
      catchError(e => this.handleError(e))
    ).toPromise();
    if (!result) {
      this.loading = false;
      return;
    }

    if (!result.Response.profileCollectibles.data) {
      this.errorMessage = "The API did not return any collectibles for this account. Privacy setting?";
      this.loading = false;
      return;
    }

    var c = result.Response.profileCollectibles.data.collectibles;
    var k = Object.keys(c);


    this.Codes.forEach(code => {
      if (!code.collectibleHash ||  k.indexOf(code.collectibleHash.toString()) == -1)
        code.state = State.Unknown;
      else {
        let existing = (c[code.collectibleHash.toString()].state & 1) == 0;
        console.log(code.name, c[code.collectibleHash.toString()].state, existing)
        if (existing)
          code.state = State.Rewarded;
        else
          code.state = State.NotRewarded;
      }
    })
    /*
    this.Codes.sort((a,b) => {
      if (a.state > b.state)
        return -1;
      if (a.state < b.state)
        return 1;
      if (a.name < b.name)
        return -1;
      else return 1;
    })*/
    this.updateUnclaimedCodesCount();
    this.loading = false;
  }

  private handleError(error: any): Observable<any> {
    console.error("ERROR", error)

    if (error.ErrorCode == 1601) {
      // account not found
      this.errorMessage = "Sorry, the Bungie API did not return information for this account."
    } else {
      this.errorMessage = "Sorry, could not grab information for this account."
    }

    return of(null);
  }

  public copied(code: string) {
    this._snackBar.open("Copied the code " + code + " to the clipboard.", "Thanks!", {
      duration: 3000
    });
  }

  private handleTrialsReportUrlError(name: string) {
    return async (p1: any, p2: Observable<GuardianInfo[]>) => {
      this.usedFallback = true;
      const url = `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${encodeURIComponent(name)}/`;
      let users = await this.http.get<any>(url, {
        headers: {"X-API-Key": "d740f7aa26874fd59aa0a09ce0c47fd6"}
      })
        .pipe(
          tap(_ => console.log('fetched FALLBACK characters', _)),
        ).toPromise();

      return (users.Response as any[]).map(u => {
        let name = u.bungieGlobalDisplayName + "#" + u.bungieGlobalDisplayNameCode
        return {
          membershipId: u.membershipId,
          membershipType: u.membershipType,
          bungieName: name,
          displayName: u.displayName,
          crossSaveOverride: {
            membershipId: '',
            membershipType: u.crossSaveOverride,
          }
        } as GuardianInfo
      });
    };
  }
}
