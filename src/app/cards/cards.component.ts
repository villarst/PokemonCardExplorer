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
  cardNumber = '1';

  constructor(private pokemonService: PokemonService) { }

  logMessage() {
    console.log('logMessage() called'); // Add this line to check how many times this function is being called
    console.log('Successful');
    var cardId = 'base1-'; //(swsh4-1 would grab swsh first card.)
    cardId = cardId.concat(this.cardNumber.toString());


    this.pokemonService.showTestCard(cardId).subscribe((data: any) => {
      this.cardInfo = data;
      console.log('Card Info:', this.cardInfo);
    });

    let parsedNumber = parseInt(this.cardNumber, 10); // Convert string to number
    parsedNumber++; // Increment the number value
    this.cardNumber = parsedNumber.toString(); // Convert the incremented number back to a string
  }

  // fourPokemonInfo () {
  //   const setCode = 'swsh4'; // Replace with the set code you want to fetch (e.g., 'swsh4')
  //   this.pokemonService.getAllPokemonInSet(setCode)
  //     .then((cards) => {
  //       // Handle the fetched cards here
  //       console.log('All cards:', cards);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching cards:', error);
  //     });
  // }
}