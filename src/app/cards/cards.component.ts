import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { cardsInSets, setsMap } from './cardSets'; // Import the constants and the map


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  title = 'Pokemon Cards Page.';
  cardInfos: any[] = []; // Initialize as an empty array to store fetched card data
  cards_in_sets = cardsInSets; // Use the imported constant
  totalCards = 11; // Total number of cards to fetch

  // Add properties to track checkbox states
  swordShieldChecked: boolean = false;
  rebelClashChecked: boolean = false;
  darknessAblazeChecked: boolean = false;
  championsPathChecked: boolean = false;
  obsidianFlamesChecked: boolean = false;

  searchBtnClicked: boolean = false;

  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // Assign the data from the shared service to your component property
    this.cardInfos = this.pokemonService.cardInfos;
  }

  updateCardInfos(newCardInfos: any[]): void {
    this.pokemonService.updateCardInfos(newCardInfos);
  }

  async showSearchResults(inputCharacter: string) {
    this.searchBtnClicked = true;
    this.cardInfos = []; // Clear the previous data before fetching new cards
    console.log('Search Button Clicked');
    this.pokemonService.clearCardInfos();
  
    try {
      const data = await this.pokemonService.showPokemonSearchResults(inputCharacter);
      console.log('Fetched raw data:', data); // Log the raw data received from the API
  
      if (data && data.data && Array.isArray(data.data)) {
        this.cardInfos = data.data; // Update cardInfos with the search results
        console.log('Fetched search results:', this.cardInfos);
        console.log('Card One: ', this.cardInfos[0].name )
        this.updateCardInfos(this.cardInfos);
      } else {
        console.log('No search results found');
      }
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  }

  async applyHit() {
    console.log('applyHit() called');
    this.cardInfos = []; // Clear the previous data before fetching new cards
  
    // Apply checkbox states before fetching cards
    if (this.swordShieldChecked) {
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
    else if (this.rebelClashChecked){
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
    else if(this.darknessAblazeChecked){
      this.totalCards = this.cards_in_sets['swsh-3'];
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
    else if(this.championsPathChecked){
      this.totalCards = this.cards_in_sets['swsh-35'];
      for (let i = 1; i <= this.totalCards; i++) {
        const cardId = 'swsh35-' + i;
        try {
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          this.cardInfos.push(data); // Push the fetched card data into the array
          console.log('Fetched card:', cardId);
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    }
    else if(this.obsidianFlamesChecked){
      this.totalCards = this.cards_in_sets['sv-3'];
      for (let i = 1; i <= this.totalCards; i++) {
        const cardId = 'sv3-' + i;
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

    }
    this.updateCardInfos(this.cardInfos);

  }

  onCheckboxChange(event: any, checkbox: string) {
    if (checkbox === 'darknessAblaze') {
      this.darknessAblazeChecked = event.target.checked;
      if (this.darknessAblazeChecked) {
        this.totalCards = this.cards_in_sets['swsh-3']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    } else if (checkbox === 'rebelClash') {
      this.rebelClashChecked = event.target.checked;
      if (this.rebelClashChecked) {
        this.totalCards = this.cards_in_sets['swsh-2']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    } else if (checkbox === 'swordShield') {
      this.swordShieldChecked = event.target.checked;
      if (this.swordShieldChecked) {
        this.totalCards = this.cards_in_sets['swsh-1']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    } else if (checkbox === 'championsPath') {
      this.championsPathChecked = event.target.checked;
      if (this.championsPathChecked) {
        this.totalCards = this.cards_in_sets['swsh-4']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    } else if (checkbox === 'obsidianFlames') {
      this.obsidianFlamesChecked = event.target.checked;
      if (this.obsidianFlamesChecked) {
        this.totalCards = this.cards_in_sets['sv-3']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 11;
      }
    }
  }
}