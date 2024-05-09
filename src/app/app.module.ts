import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { ChampionsLandingPageComponent } from './champions-landing-page/champions-landing-page.component';
import { ChampionsHeaderComponent } from './champions-header/champions-header.component';
import { ChampionsWinnersComponent } from './champions-winners/champions-winners.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { HighlightWinnerDirective } from './directives/highlight-winner.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent,
    ChampionsLandingPageComponent,
    ChampionsHeaderComponent,
    ChampionsWinnersComponent,
    LoaderComponent,
    HighlightWinnerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
