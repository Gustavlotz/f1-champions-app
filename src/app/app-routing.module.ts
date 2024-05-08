import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsLandingPageComponent } from './champions-landing-page/champions-landing-page.component';
import { ChampionsWinnersComponent } from './champions-winners/champions-winners.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: ChampionsLandingPageComponent },
  { path: 'winners/:year', component: ChampionsWinnersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
