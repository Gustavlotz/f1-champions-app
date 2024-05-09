import { Driver } from "./driver.model";


export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    Circuit: {
        circuitId: string;
        url: string;
        circuitName: string;
        Location: {
            locality: string;
            country: string;
        };
    };
    Results: [Results]
}

interface Results {
    position: string;
    positionText: string;
    points: string;
    Driver: Driver
    Constructor: {
        constructorId: string;
        url: string;
        name: string;
        nationality: string;
    };
    grid: string;
    laps: string;
    status: string;
    Time: {
        millis: string;
        time: string;
    };
    FastestLap: {
        rank: string;
        lap: string;
        Time: {
            time: string;
        };
        AverageSpeed: {
            units: string;
            speed: string;
        };
    };
}[];
