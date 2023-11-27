import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  title = 'Pokemon Cards Page.';
  cardInfos: any[] = []; // Initialize as an empty array to store fetched card data

  // name_age = {
  //   'sahil': 25,
  //   'anaya': 8,
  //   'atul': 16
  // };

  totalCards = 11; // Total number of cards to fetch

  constructor(private pokemonService: PokemonService) { }

  async logMessage() {
    console.log('logMessage() called');

    this.cardInfos = []; // Clear the previous data before fetching new cards

    for (let i = 1; i <= this.totalCards; i++) {
      const cardId = 'swsh3-' + i;
      try {
        const data = await this.pokemonService.showTestCard(cardId).toPromise();
        this.cardInfos.push(data); // Push the fetched card data into the array
        console.log('Fetched card:', cardId);
      } catch (error) {
        console.error('Error fetching card:', cardId, error);
      }
    }
  }
}