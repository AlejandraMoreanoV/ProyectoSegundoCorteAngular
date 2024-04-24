import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Site} from "./site";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private url: string = "http://localhost:8080/sede";

  constructor(private http: HttpClient) { }


  public searchAllSite(): Observable<Array<Site>> {
    return this.http.get<Array<Site>>(this.url);
  }

  public searchAllByCity(city: string): Observable<Array<Site>> {
    return this.http.get<Array<Site>>(`${this.url}/filtrar/${city}`);
  }

  public searchSiteById(id: number): Observable<Site> {
    return this.http.get<Site>(`${this.url}/id/${id}`);
  }

  public searchSiteByCity(city: string): Observable<Site> {
    return this.http.get<Site>(`${this.url}/ciudad/${city}`);
  }

  public searchSiteByIdAndCity(id: number, city: string): Observable<Site> {
    return this.http.get<Site>(`${this.url}/idCiudad/${id}/${city}`);
  }

  public insertSite(siteNew: Site): Observable<Site> {
    return this.http.post<any>(this.url, siteNew);
  }

  public updateSite(siteNew: Site): Observable<Site> {
    return this.http.put<Site>(this.url, siteNew);
  }

  public deleteSite(idSite: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${idSite}`);
  }


}
