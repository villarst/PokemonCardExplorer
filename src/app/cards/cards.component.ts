import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  title = 'Pokemon Cards Page.';
  cardInfo: any; // This will store the fetched card data

  constructor(private pokemonService: PokemonService) { }

  logMessage() {
    console.log('Successful');
    const cardId = 'base1-4'; // Replace with the actual card ID you want to fetch
    this.pokemonService.getCardInfo(cardId).subscribe((data: any) => {
      this.cardInfo = data;
      console.log('Card Info:', this.cardInfo);
    });
  }
}