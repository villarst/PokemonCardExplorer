import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiKey = '15625e63-354d-4ce5-a221-a5c200ce57f4'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  showTestCard(cardId: string) {
    const skeletonURL = 'https://api.pokemontcg.io/v2/cards';
    const url = `${skeletonURL}/${cardId}`;
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(url, { headers });
  }

  async showPokemonSearchResults(cardCharacter: string) {
    // const skeletonURL = 'https://api.pokemontcg.io/v2/cards?q=name';
    // const url = `${skeletonURL}:${cardCharacter}`; // Corrected URL construction
    // console.log('URL:', url); // Log the constructed URL
    // const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    // return this.http.get(url, { headers });

    try {
      const response = await fetch('https://api.pokemontcg.io/v2/cards?q=name:charizard');
      const data = await response.json();
  
      // Check if the response contains data
      if (data && data.data && Array.isArray(data.data)) {
        const dataArray = data.data; // This is the array of Pokemon cards
  
        // Now you can work with the array as needed
        console.log(dataArray); // Display the array of Pokemon cards in the console
  
        // You can iterate through the array, access individual cards, or perform any operations you need
        for (const card of dataArray) {
          console.log(`Name: ${card.name}, HP: ${card.hp}, Rarity: ${card.rarity}`);
          // Access other properties as needed and perform operations
        }
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
}