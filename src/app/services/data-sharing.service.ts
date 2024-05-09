import { Injectable } from '@angular/core';
import { Driver } from '../models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private selectedWinner: Driver | null = null;
  constructor() { }

  getSelectedWinner(): Driver | null {
    return this.selectedWinner;
  }

  setSelectedWinner(winner: Driver): void {
    this.selectedWinner = winner;
  }
}
