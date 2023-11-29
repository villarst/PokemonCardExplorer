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

  cards_in_sets = {
    'swsh-1': 216,
    'swsh-2': 209
  };
  
  totalCards = 11; // Total number of cards to fetch

  // Add properties to track checkbox states
  darknessAblazeChecked: boolean = false;
  battleStylesChecked: boolean = false;

  constructor(private pokemonService: PokemonService) { 
    let map = new Map<string, string[]>();
    map.set('Darkness Ablaze', ['swsh-1']);
    map.get('Darkness Ablaze')?.push('216'); // Adding 'value2' to the array
    
    map.set('Battle Styles', ['swsh-2']);
    map.get('Battle Styles')?.push('209');
  }

  async logMessage() {
    console.log('logMessage() called');
    this.cardInfos = []; // Clear the previous data before fetching new cards
  
    // Apply checkbox states before fetching cards
    if (this.darknessAblazeChecked) {
      this.totalCards = this.cards_in_sets['swsh-1'];
      for (let i = 1; i <= this.totalCards; i++) {
        const cardId = 'swsh1-' + i;
        try {
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          this.cardInfos.push(data); // Push the fetched card data into the array
          console.log('Fetched card:', cardId);
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    } 
    else if (this.battleStylesChecked){
      this.totalCards = this.cards_in_sets['swsh-2'];
      for (let i = 1; i <= this.totalCards; i++) {
        const cardId = 'swsh2-' + i;
        try {
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          this.cardInfos.push(data); // Push the fetched card data into the array
          console.log('Fetched card:', cardId);
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    }
    else{
      this.totalCards = 200;
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

  onCheckboxChange(event: any, checkbox: string) {
    if (checkbox === 'darknessAblaze') {
      this.darknessAblazeChecked = event.target.checked;
      if (this.darknessAblazeChecked) {
        this.totalCards = this.cards_in_sets['swsh-1']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    } else if (checkbox === 'battleStyles') {
      this.battleStylesChecked = event.target.checked;
      if (this.battleStylesChecked) {
        this.totalCards = this.cards_in_sets['swsh-2']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    }
  }
}