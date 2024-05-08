import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ApiResponse } from '../models/apiResponse.interface';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-champions-winners',
  templateUrl: './champions-winners.component.html',
  styleUrls: ['./champions-winners.component.scss']
})
export class ChampionsWinnersComponent implements OnInit {
  year: string = '';
  seasonData: ApiResponse | null = null;
  constructor(private route: ActivatedRoute, private championService: ChampionsService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year')?.toString() || '';
      // Fetch season data based on the year parameter
      this.fetchSeasonData(this.year);
    });
  }

  async fetchSeasonData(year: string) {
    // Call SeasonService to get season data for the specified year
    let x = await this.championService.getSingleSeasonByYearWins(parseInt(year, 10));
    x.subscribe((result) => {
      console.log(result)
    })
    // this.championService.getSingleSeasonByYearWins(parseInt(year, 10)).subscribe(
    //   (data: ApiResponse) => {
    //     this.seasonData = data;
    //     console.log(this.seasonData)
    //   },
    //   (error) => {
    //     console.error('Error fetching season data:', error);
    //   }
    // );
  }

}
