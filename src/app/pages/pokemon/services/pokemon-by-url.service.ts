import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonByUrlService {

  constructor(private http:HttpClient) { }
  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      tap({
      next: (pokemon) => {
        console.log('Received:', pokemon);
      },
      error: (error) => {
        console.warn('Error:', error)  
      }
    }))
  }
  getPokemonsByUrl(url: string):Observable<any>{
    return this.http.get<any>(url)

  }
}
