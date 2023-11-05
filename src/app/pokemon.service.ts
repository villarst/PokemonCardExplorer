import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // The link below is used to get all the cards with the 
  // name 'gardevoir'.
  // https://api.pokemontcg.io/v2/cards?q=name:gardevoir


  constructor(private http: HttpClient) { }

  showTestCard(cardId: string) {
    const apiUrl = 'https://api.pokemontcg.io/v2/cards';
    const apiKey = 'INSERT_KEY'; // Replace with your actual API key
    const url = `${apiUrl}/${cardId}?apiKey=${apiKey}`;
    return this.http.get(url);
  }

  showPokemonSearchResults(cardCharacter: string) {
    const apiCharacterLink = 'https://api.pokemontcg.io/v2/cards?q=name';
    const apiKey = 'INSERT_KEY'; // Replace with your actual API key
    const url = `${apiCharacterLink}/${cardCharacter}?apiKey=${apiKey}`;
    return this.http.get(url);
  }
}