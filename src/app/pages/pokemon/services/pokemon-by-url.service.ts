import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonByUrlService {

  constructor(private http:HttpClient) { }
  private url = 'https://pokeapi.co/api/v2/pokemon/'
  getPokemonByUrl(name: string): Observable<any> {
    return this.http.get<any>(`${this.url}${name}`).pipe(
      tap({
      next: (pokemon) => {
        console.log('Received:', pokemon);
      },
      error: (error) => {
        console.warn('Error:', error)  
      }
    }))
  }
  getPokemonsImageByUrl(url: string):Observable<any>{
    return this.http.get<any>(url)

  }
}
