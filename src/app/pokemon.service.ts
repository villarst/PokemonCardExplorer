import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  getCardInfo(cardId: string) {
    const apiKey = 'REPLACE-TEXT-WITH-API-KEY'; // Replace with your actual API key
    const url = `${this.apiUrl}/${cardId}?apiKey=${apiKey}`;
    return this.http.get(url);
  }
}