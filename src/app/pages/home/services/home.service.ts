import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { ICharacter } from '../models/icharacter';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  private url = "https://pokeapi.co/api/v2/pokemon/"

  getPokemons():Observable<ICharacter[]>{
    return this.http.get<any>(this.url).pipe(
     
      map(response => response.results),
      tap({
      next: (response:any)=> {
        console.log(response);
        
      },
      error: (error:any) => {
        console.error('Error:', error);
      }
    }))
  }
}
