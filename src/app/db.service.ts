import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Guest, GuestResult } from "./guest";
import { Observable } from "rxjs";

@Injectable()
export class DbService {
  readonly endpoint = `${environment.apiUrl}/guests`;

  private httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  saveProfile(guest: Guest): Observable<Guest> {
    return this.http.post<any>(`${this.endpoint}`, guest, this.httpOptions);
  }

  getProfiles(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.endpoint}`, this.httpOptions);
  }

  getAll(): Observable<GuestResult> {
    return this.http.get<GuestResult>(`${this.endpoint}/?$count=true&$skip=0&$top=5&$orderby=Created%20desc`, this.httpOptions);
  }
}
