import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cardInfos: any[] = []; // Initialize as an empty array to store fetched card data

  constructor(private pokemonService: PokemonService) { }

  // async showSearchResults(inputCharacter: string) {
  //   console.log('Successful');
  //   this.cardInfos = []; // Clear the previous data before fetching new cards

  //   try {
  //     const data = await this.pokemonService.showPokemonSearchResults(inputCharacter);
  //     this.cardInfos.push(data); // Push the fetched card data into the array
  //     this.pokemonService.updateCardInfos(this.cardInfos);
  //     console.log('Fetched cards.');
  //   } catch (error) {
  //     console.error('Error fetching cards', error);
  //   }
  // }
}