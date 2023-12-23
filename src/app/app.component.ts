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
  //     const data = await this.pokemonService.showPokemonSearchResults(inputCharacter).toPromise();
  //     this.cardInfos.push(data); // Push the fetched card data into the array
  //     console.log('Fetched cards.');
  //   } catch (error) {
  //     console.error('Error fetching cards', error);
  //   }
  // }

  async fetchData(): Promise<void> {
    try {
      console.log('Here');
      const response = await fetch('https://api.pokemontcg.io/v2/cards?q=name:charizard');
      const data = await response.json();

      // Check if the response contains data
      if (data && data.data && Array.isArray(data.data)) {
        const dataArray = data.data;

        // Display the array of Pokemon cards in the console
        console.log(dataArray);

        // Iterate through the array and log information about each card
        for (const card of dataArray) {
            console.log(`Name: ${card.name}, HP: ${card.hp}, Rarity: ${card.rarity}`);
            // Access other properties as needed and perform operations
        }
      } 
      else {
        console.log('No data found');
      }
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  // fetchData(): void {
  //   fetch('https://api.pokemontcg.io/v2/cards?q=name:charizard')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data && data.data && Array.isArray(data.data)) {
  //         const dataArray = data.data;

  //         // Display the array of Pokemon cards in the console
  //         console.log(dataArray);

  //         // Iterate through the array and log information about each card
  //         for (const card of dataArray) {
  //           console.log(`Name: ${card.name}, HP: ${card.hp}, Rarity: ${card.rarity}`);
  //           // Access other properties as needed and perform operations
  //         }
  //       } 
  //       else {
  //         console.log('No data found');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     }); 
  // }
  // fetchData(): void {
  //   fetch('https://api.pokemontcg.io/v2/cards?q=name:charizard')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => this.processData(data))
  //     .catch(error => {
  //         console.error('Error fetching data:', error);
  //     });
  // }

  // processData(data: any): void {
  //   if (data && data.data && Array.isArray(data.data)) {
  //     const dataArray = data.data;
  //     // Display the array of Pokemon cards in the console
  //     console.log(dataArray);

  //     // Iterate through the array and log information about each card
  //     for (const card of dataArray) {
  //       console.log(`Name: ${card.name}, HP: ${card.hp}, Rarity: ${card.rarity}`);
  //       // Access other properties as needed and perform operations
  //     }
  //   } 
  //   else {
  //     console.log('No data found');
  //   }
  // }
}