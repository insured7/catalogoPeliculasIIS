import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=34c3ca0d';

  constructor(private http: HttpClient) { }

  getPeliculas(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${titulo}`);
  }

  getPeliculaById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&i=${id}`);
  }
}