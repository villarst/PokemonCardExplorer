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



  checkBoxValues: { set: string, checkedOrNot: boolean}[] = [
  { "set": "swordShieldChecked", "checkedOrNot": false},
  { "set": "rebelClashChecked", "checkedOrNot": false },
  { "set": "darknessAblazeChecked", "checkedOrNot": false },
  { "set": "championsPathChecked", "checkedOrNot": false },
  { "set": "obsidianFlamesChecked", "checkedOrNot": false },
  { "set": "paldeanFatesChecked", "checkedOrNot": false }
  ];


  // Add properties to track checkbox states
  // swordShieldChecked: boolean = false;
  // rebelClashChecked: boolean = false;
  // darknessAblazeChecked: boolean = false;
  // championsPathChecked: boolean = false;
  // obsidianFlamesChecked: boolean = false;
  // paldeanFatesChecked: boolean = false;

  transparentBoxVisible: boolean = false;
  // searchInitiated: boolean = true;

  isCancelled = false;


  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // Assign the data from the shared service to your component property
    this.cardInfos = this.pokemonService.cardInfos;
  }

  updateCardInfos(newCardInfos: any[]): void {
    this.pokemonService.updateCardInfos(newCardInfos);
  }

  showTransparentBox() {
    this.transparentBoxVisible = true;
  }

  hideTransparentBox() {
    this.transparentBoxVisible = false;
  }

  hideFilterInfo() {
    const elementToToggle1 = document.getElementById('Filters-Header');
    const elementToToggle2 = document.getElementById('sets');

    if (elementToToggle1 && elementToToggle2) {
        if (elementToToggle1.style.display === 'none' && elementToToggle2.style.display === 'none') {
            // If both elements are currently hidden, show them
            elementToToggle1.style.display = 'block'; // You can use 'flex', 'inline-block', or other values as needed
            elementToToggle2.style.display = 'block';
        } else {
            // If at least one element is visible, hide them both
            elementToToggle1.style.display = 'none';
            elementToToggle2.style.display = 'none';
        }
    }
  }


  async showSearchResults(inputCharacter: string) {
    this.cardInfos = []; // Clear the previous data before fetching new cards
    console.log('Search Button Clicked');
    this.pokemonService.clearCardInfos();
    // this.searchInitiated = true;
  
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

  async applyHit(event: any, checkbox: string) {
    console.log('checkbox hit so applyHit() and onCheckboxChange() called');
    this.onCheckboxChange(event, checkbox);
    this.cardInfos = []; // Clear the previous data before fetching new cards
    
    // Apply checkbox states before fetching cards
    // Paldean Fates
    if (this.checkBoxValues[5].checkedOrNot) {
      this.totalCards = this.cards_in_sets['sv4pt5'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }
        const cardId = 'sv4pt5-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    } 
    // Sword and Shield
    else if (this.checkBoxValues[0].checkedOrNot) {
      this.totalCards = this.cards_in_sets['swsh-1'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }        
        const cardId = 'swsh1-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    } 
    // Rebel Clash
    else if (this.checkBoxValues[1].checkedOrNot){
      this.totalCards = this.cards_in_sets['swsh-2'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }        
        const cardId = 'swsh2-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    }
    // Darkness Ablaze
    else if(this.checkBoxValues[2].checkedOrNot){
      this.totalCards = this.cards_in_sets['swsh-3'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }   
        const cardId = 'swsh3-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    }
    // Champions Path
    else if(this.checkBoxValues[3].checkedOrNot){
      this.totalCards = this.cards_in_sets['swsh-35'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }         
        const cardId = 'swsh35-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
        } catch (error) {
          console.error('Error fetching card:', cardId, error);
        }
      }
    }
    // Obsidian Flames
    else if(this.checkBoxValues[4].checkedOrNot){
      this.totalCards = this.cards_in_sets['sv-3'];
      for (let i = 1; i <= this.totalCards; i++) {
        // Check the cancellation flag.
        if(this.isCancelled) {
          console.log('Operation cancelled. Stopping further card fetching.');
          this.isCancelled = false;
          break;
        }        
        const cardId = 'sv3-' + i;
        try {
          // Check the cancellatin flag again before making the API call.
          if(this.isCancelled) {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
          const data = await this.pokemonService.showTestCard(cardId).toPromise();
          // Check the cancellation flag before updating the cardInfos array.
          if(!this.isCancelled) {
            this.cardInfos.push(data); // Push the fetched card data into the array
            console.log('Fetched card:', cardId);
          }
          else {
            console.log('Operation cancelled. Stopping further card fetching.');
            this.isCancelled = false;
            break;
          }
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
    // Darkness Ablaze
    if (checkbox === 'darknessAblaze') {
      this.checkBoxValues[2].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[2].checkedOrNot) {
        this.totalCards = this.cards_in_sets['swsh-3']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();
      }
    }
    // Rebel Clash 
    else if (checkbox === 'rebelClash') {
      this.checkBoxValues[1].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[1].checkedOrNot) {
        this.totalCards = this.cards_in_sets['swsh-2']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();
      }
    } 
    // Sword and Shielld
    else if (checkbox === 'swordShield') {
      this.checkBoxValues[0].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[0].checkedOrNot) {
        this.totalCards = this.cards_in_sets['swsh-1']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();
      }
    }
    // Champions Path 
    else if (checkbox === 'championsPath') {
      this.checkBoxValues[3].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[3].checkedOrNot) {
        this.totalCards = this.cards_in_sets['swsh-4']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();
      }
    } 
    // Obsidian Flames
    else if (checkbox === 'obsidianFlames') {
      this.checkBoxValues[4].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[4].checkedOrNot) {
        this.totalCards = this.cards_in_sets['sv-3']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();      
      }
    } 
    // Paldean Fates
    else if (checkbox === 'paldeanFates') {
      this.checkBoxValues[5].checkedOrNot = event.target.checked;
      if (this.checkBoxValues[5].checkedOrNot) {
        this.totalCards = this.cards_in_sets['sv4pt5']; // Set totalCards to 216 when Darkness Ablaze is checked
      } else {
        // Set totalCards to the default value or any other desired value when unchecked
        this.totalCards = 0;
        this.cardInfos = [];
        ///////////////////////////////////////////////
        this.pokemonService.cardInfos = [];
        this.pokemonService.clearCardInfos;
        this.cancelOperations();
      }
    }



    // // Uncheck all other checkboxes when a checkbox is checked
    // this.checkBoxValues.forEach((box) => {
    //   if (box.set !== checkbox) {
    //     box.checkedOrNot = false;
    //     (this as any)[`${box.set}Checked`] = false; // Uncheck the corresponding property
    //   }
    // });

    // // Update the checked state of the current checkbox
    // (this as any)[`${checkbox}Checked`] = event.target.checked;
    // const selectedBox = this.checkBoxValues.find((box) => box.set === checkbox);
    // if (selectedBox) {
    //   selectedBox.checkedOrNot = (this as any)[`${checkbox}Checked`];
    // }
    // // Handle the logic for setting totalCards based on the selected checkbox
    // if (event.target.checked) {
    //   this.totalCards = this.cards_in_sets[checkbox];
    // } else {
    //   this.totalCards = 0;
    //   this.cardInfos = [];
    //   this.pokemonService.clearCardInfos();
    //   this.cancelOperations();
    // }
  }

  // Add a method to cancel ongoing operations
  cancelOperations() {
    // Set the cancellation flag to true
    this.isCancelled = true;
  }
}