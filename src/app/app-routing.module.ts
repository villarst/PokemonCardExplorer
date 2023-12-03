import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { EnergiesComponent } from './energies/energies.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'energies', component: EnergiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
