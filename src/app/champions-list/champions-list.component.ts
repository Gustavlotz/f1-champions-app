import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent {
  @Input() dataArray: any[] = [];
  @Input() onItemClick: ((obj: any) => void) | undefined;
  constructor(private router: Router, private dataSharingService: DataSharingService) {

  }

  handleItemClick(obj: any): void {
    if (this.onItemClick) {
      this.onItemClick(obj);
    }
  }



}
