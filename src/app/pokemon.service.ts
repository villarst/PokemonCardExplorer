import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://api.pokemontcg.io/v2/cards';
  private apiKey = '15625e63-354d-4ce5-a221-a5c200ce57f4'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  showTestCard(cardId: string) {
    const url = `${this.apiUrl}/${cardId}?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  showPokemonSearchResults(cardCharacter: string) {
    const apiCharacterLink = 'https://api.pokemontcg.io/v2/cards?q=name';
    const url = `${apiCharacterLink}=${cardCharacter}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  // Able to grab and fetch 4 cards and their info but need to grab images now and display.
  async getAllPokemonInSet(setCode: string) {
    const totalCardsInSet = 4; // Replace with the actual total number of cards in the set
    const allCards: any[] = [];

    for (let i = 1; i <= totalCardsInSet; i++) {
      const cardId = `${setCode}-${i}`;
      const url = `${this.apiUrl}/${cardId}?apiKey=${this.apiKey}`;

      try {
        const cardInfo = await this.http.get(url).toPromise();
        allCards.push(cardInfo);
        console.log(`Fetched card: ${cardId}`);
      } catch (error) {
        console.error(`Error fetching card: ${cardId}`, error);
      }
    }
    return allCards;
  }
}