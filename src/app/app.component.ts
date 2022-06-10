import {Component, OnInit} from '@angular/core';
import {CodeInfo, Codes} from './data/codes';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {debounceTime, switchMap, tap} from "rxjs/operators";


interface GuardianInfo {
  bnetId: number;
  bungieName: string;
  displayName: string;
  membershipId: number;
  membershipType: number;
  emblemHash: string;
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

  currentUserMembershipId : number = 0;


  constructor(private http: HttpClient) {
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

    const url = "https://elastic.destinytrialsreport.com/players/0/" + encodeURIComponent(name);
    const users = await this.http.get<GuardianInfo[]>(url)
      .pipe(
        tap(_ => console.log('fetched characters')),
        //catchError(this.handleError<GuardianInfo[]>('searchUsers'))
      ).toPromise();

    console.log("users", users)
    return users;
  }

  async filterCollectibles(membershipType: number, membershipId: number) {
    this.resetCodeStates();

    this.currentUserMembershipId = membershipId;
    const url = `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/?components=800`;
    const result = await this.http.get<any>(url, {
      headers: {"X-API-Key": "d740f7aa26874fd59aa0a09ce0c47fd6"}
    })
      .pipe(
        tap(_ => console.log('fetched collectibles')),
        //catchError(this.handleError<GuardianInfo[]>('searchUsers'))
      ).toPromise();
    console.warn("result", result)

    var c = result.Response.profileCollectibles.data.collectibles;
    console.warn("c", c)
    var k = Object.keys(c);



    this.Codes.forEach(code => {
      console.log(k.indexOf(code.collectibleHash.toString()))
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
  }
}
