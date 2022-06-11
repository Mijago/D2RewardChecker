import {Component, OnInit} from '@angular/core';
import {CodeInfo, Codes} from './data/codes';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {catchError, debounceTime, switchMap, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as moment from 'moment';


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
  guardianSearchFormControl = new FormControl();
  users: GuardianInfo[] = [];

  currentUserMembershipId: number = 0;
  errorMessage: string = "";

  public loading: boolean = false;


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  resetCodeStates() {
    this.Codes = Codes.sort((a, b) => a.name > b.name ? 1 : -1)
      .map(code => {
        return Object.assign({state: State.Unknown}, code)
      })
  }

  ngOnInit(): void {
    this.resetCodeStates()

    this.guardianSearchFormControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(changedValue => this.searchUsers(changedValue)),
    ).subscribe(users => this.users = users);
  }

  async searchUsers(name: string) {
    if (name == "")
      return [];
    this.loading = true;

    const url = "https://elastic.destinytrialsreport.com/players/0/" + encodeURIComponent(name);
    let users = await this.http.get<GuardianInfo[]>(url)
      .pipe(
        tap(_ => console.log('fetched characters')),
        //catchError(this.handleError<GuardianInfo[]>('searchUsers'))
      ).toPromise();

    var userMap = users
      .sort((a, b) => {
        let d1 = moment(a.lastPlayed, "YYYY-MM-DDTHH:mm:ss:SSSZ").fromNow();
        let d2 = moment(b.lastPlayed, "YYYY-MM-DDTHH:mm:ss:SSSZ").fromNow();
        return d1 > d2 ? 1 : 0;
      })
      .reduce((previousValue, currentValue, currentIndex) => {
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
      if (k.indexOf(code.collectibleHash.toString()) == -1)
        code.state = State.Unknown;
      else {
        let existing = (c[code.collectibleHash.toString()].state & 1) == 1;
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
}
