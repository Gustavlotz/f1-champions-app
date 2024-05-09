import { Driver } from "./driver.model";
import { Race } from "./race.model";

/* 
We could trim alot of data here and only grab what we need but for the sake of this exercise wasnt sure what should and should not be trimmed,
this can be applied to all models/ intefaces
*/
export {
  ApiResponseSeasons,
  ApiResponseRaces,
  ApiResponseSingleSeason
}
interface ApiResponseSeasons {
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

interface ApiResponseSingleSeason {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: {
        DriverStandings: {
          Driver: Driver;
        }[]; // Array of Driver standings
      };
    };
  };
}

interface ApiResponseRaces {
  MRData: {
    RaceTable: {
      season: string;
      round: string;
      Races: [Race];
      limit: string;
      offset: string;
      series: string;
      total: string;
      url: string;
      xmlns: string;
    };
  };
}

