import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponseRaces, ApiResponseSeasons, ApiResponseSingleSeason } from '../models/apiResponse.interface';
import { ChampionsService } from '../services/champions.service';
import { Driver } from '../models/driver.model';
import { Champion } from '../models/champion.model';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-champions-winners',
  templateUrl: './champions-winners.component.html',
  styleUrls: ['./champions-winners.component.scss']
})
export class ChampionsWinnersComponent implements OnInit {
  year: string = '';
  raceWinners: Champion | any = [];
  isLoading: boolean = true;
  selectedWinner: Driver | null = null;
  constructor(private route: ActivatedRoute, private championService: ChampionsService, private dataSharingService: DataSharingService) {

  }
  ngOnInit() {
    this.selectedWinner = this.dataSharingService.getSelectedWinner();

    this.route.paramMap.subscribe(async params => {
      this.year = params.get('year')?.toString() || '';
      if (!this.selectedWinner) {
        //implemented this in case the page is refreshed and the selected winner would be undefined
        await this.refetchWinner();
      }
      // Fetch season data based on the year parameter
      this.fetchSeasonData(this.year);
    });
  }

  async fetchSeasonData(year: string) {

    // Call SeasonService to get season data for the specified year;
    // console.log(this.selectedWinner, ' selected winner here')
    let raceResults = await this.championService.getSingleSeasonByYearWins(parseInt(year, 10));
    raceResults.subscribe((result: ApiResponseRaces[]) => {
      this.raceWinners = result.map((response: ApiResponseRaces) => {
        const index = "Round: " + response.MRData.RaceTable.Races[0].round;
        const champion: Driver = response.MRData.RaceTable.Races[0].Results[0].Driver;
        const isWinner = champion.driverId === this.selectedWinner?.driverId;
        return { index, champion, isWinner };
      })
      this.isLoading = false;
    }, (error) => {
      console.error('Error fetching world champions:', error); // can replace with a toast message or something similar
      this.isLoading = false;
    }
    )
  }

  refetchWinner() {
    return new Promise((resolve) => {
      this.championService.getSeasonChamp(this.year).subscribe((response: ApiResponseSingleSeason[] | any) => {
        const champion: Driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
        this.selectedWinner = champion;
        resolve(champion);
      }, (error) => {
        console.error('Error fetching world champion:', error); // can replace with a toast message or something similar
      }
      )
    })
  }

}
