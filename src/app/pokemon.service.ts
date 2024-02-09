import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiKey = '15625e63-354d-4ce5-a221-a5c200ce57f4'; // Replace with your actual API key
  
  
  public cardInfos: any[] = [];
  updateCardInfos(newCardInfos: any[]): void {
    this.cardInfos = newCardInfos;
    console.log('Update Called.');
  }

  clearCardInfos(): void {
    this.cardInfos = [];
    console.log('Clear Called.');
  }

  
  constructor(
    private http: HttpClient
    
    ) {

    }

  showTestCard(cardId: string) {
    const skeletonURL = 'https://api.pokemontcg.io/v2/cards';
    const url = `${skeletonURL}/${cardId}`;
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(url, { headers });
  }

  async showPokemonSearchResults(cardCharacter: string) {
    try {
      const skeletonURL = 'https://api.pokemontcg.io/v2/cards?q=name';
      const url = `${skeletonURL}:${cardCharacter}`;
      const response = await fetch(url);

      console.log('Response is: ', response);
      const data = await response.json();
  
      return data; // Return the entire response for processing in the component
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error; // Propagate the error to the calling method
    }
  }
  
}