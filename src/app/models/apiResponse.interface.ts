import { Driver } from "./driver.model";

export interface ApiResponse {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: {
        DriverStandings: {
          Driver: Driver;
        }[];
      }[];
    };
  };
}