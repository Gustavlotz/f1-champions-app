import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../services/champions.service';
import { Router } from '@angular/router';
import { Champion } from '../models/champion.model';
import { Driver } from '../models/driver.model';
import { ApiResponse } from '../models/apiResponse.interface';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit {
  isLoading: boolean = true;
  public seasons: Champion | any = [];
  constructor(private championService: ChampionsService, private router: Router) {

  }

  ngOnInit() {
    this.championService.getSeasonsAndChampions().subscribe((responses: ApiResponse[]) => {
      this.seasons = responses.map((response: ApiResponse) => {
        const year = response.MRData.StandingsTable.season;
        const champion: Driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
        return { year, champion };
      });
      this.isLoading = false;
    }, (error) => {
      console.error('Error fetching world champions:', error); // can replace with a toast message or something similar
      this.isLoading = false;
    }
    )
  }

  goToWinnersPage(season: any) {
    //could have used a service here to store data to prevent multiple api calls, seeing as we have already called the data once
    this.router.navigate(['/winners', season.year])
  }


}
