import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { env } from '../environments/environment';
import { ApiResponse } from '../models/apiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  apiUrl = env.apiUrl;
  constructor(private http: HttpClient) { }

  // could put params here for reuseability although was not specified in spec (getWorldChamps(startYear, endYear))
  getSeasonsAndChampions(): Observable<ApiResponse[]> {
    const requests: Observable<any>[] = [];
    let currentYear = new Date().getFullYear(); // dynamic coded upper limit
    for (let year = 2005; year <= currentYear; year++) {
      const requestUrl = `${this.apiUrl}/${year}/driverStandings.json`;
      requests.push(this.http.get<any>(requestUrl));
    }
    return forkJoin(requests); // Combine multiple observables into a single observable
  }

  async getSingleSeasonByYearWins(year: number): Promise<Observable<ApiResponse[]>> {
    try {
      let numberRaces = await this.helperRequestNumberRacesInThatSeason(year);
      const requests: Observable<any>[] = [];

      for (let raceIndex = 1; raceIndex <= numberRaces; raceIndex++) {
        const requestUrl = `${this.apiUrl}/${year}/${raceIndex}/results.json`;
        requests.push(this.http.get<any>(requestUrl));
      }
      return forkJoin(requests);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private async helperRequestNumberRacesInThatSeason(year: number): Promise<number> {
    const requestUrl = `${this.apiUrl}/${year}/last/results.json`;
    try {
      const response: any = await this.http.get<any>(requestUrl).toPromise();
      const numRaces = parseInt(response.MRData.RaceTable.round);
      return numRaces;
    } catch (error) {
      console.error('Error fetching race data:', error);
      throw error; // Propagate the error to the caller
    }
  }



}
