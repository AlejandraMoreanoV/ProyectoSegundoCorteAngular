import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Site} from "../sites/site";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8080/usuario";

  constructor(private http: HttpClient) { }

  public searchAllUserByIdSite(idSite: number): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.url}/${idSite}`);
  }

  public searchAllUserByNameUser(idSite: number, nameUser: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.url}/filtrar/${idSite}/${nameUser}`);
  }

  public searchUserById(user: User): Observable<User> {
    return this.http.get<User>(`${this.url}/id/${user.idSede}/${user.id}`);
  }

  public searchUserByName(user: User): Observable<User> {
    return this.http.get<User>(`${this.url}/nombre/${user.idSede}/${user.nombre}`);
  }

  public searchUserByIdAndName(user: User): Observable<User> {
    return this.http.get<User>(`${this.url}/idNombre/${user.idSede}/${user.id}/${user.nombre}`);
  }

  public insertUser(userNew: User): Observable<User> {
    return this.http.post<User>(`${this.url}/${userNew.idSede}`, userNew);
  }

  public updateUser(userNew: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${userNew.idSede}`, userNew);
  }

  public deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.url}/${user.idSede}/${user.id}`);
  }
}
