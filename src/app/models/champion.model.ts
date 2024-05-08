import { Driver } from './driver.model';

export class Champion {
    year: string;
    driver: Driver;

    constructor(driver: Driver) {
        this.year = '';
        this.driver = driver;
    }
}