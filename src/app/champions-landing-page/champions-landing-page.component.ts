import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../services/champions.service';
import { Champion } from '../models/champion.model';
import { ApiResponseSeasons } from '../models/apiResponse.interface';
import { Driver } from '../models/driver.model';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-champions-landing-page',
  templateUrl: './champions-landing-page.component.html',
  styleUrls: ['./champions-landing-page.component.scss']
})
export class ChampionsLandingPageComponent implements OnInit {
  isLoading: boolean = true;
  public seasons: Champion | any = [];

  constructor(private championService: ChampionsService, private router: Router, private dataSharingService: DataSharingService) {

  }

  ngOnInit(): void {
    this.championService.getSeasonsAndChampions().subscribe((responses: ApiResponseSeasons[]) => {
      this.seasons = responses.map((response: ApiResponseSeasons) => {
        const index = response.MRData.StandingsTable.season;
        const champion: Driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
        return { index, champion };
      });
      this.isLoading = false;
    }, (error) => {
      console.error('Error fetching world champions:', error); // can replace with a toast message or something similar
      this.isLoading = false;
    }
    )
  }


  goToWinnersPage(obj: any) {
    this.dataSharingService.setSelectedWinner(obj.champion);
    this.router.navigate(['/winners', obj.index])
  }
}  
