import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pokemonService: PokemonService) { }

  showSearchResults(inputCharacter: string) {
    console.log('Successful');
    this.pokemonService.showPokemonSearchResults(inputCharacter);
  }

  // Create a method to handle the button click event and pass the input value.
  searchClicked(inputValue: string) {
    this.showSearchResults(inputValue);
  }
}