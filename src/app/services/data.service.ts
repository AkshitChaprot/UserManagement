import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData, Member } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/user-data.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.dataUrl).pipe(
      map(data => {
        data.data.members = data.data.members.map(member => ({
          ...member,
          user: {
            ...member.user,
            created: new Date(member.user.created) // Convert string to Date
          }
        }));
        return data;
      })
    );
  }
}
