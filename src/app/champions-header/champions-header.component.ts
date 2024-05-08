import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champions-header',
  templateUrl: './champions-header.component.html',
  styleUrls: ['./champions-header.component.scss']
})
export class ChampionsHeaderComponent {
  public title: string = "F1 world champions";
  @Input() year: string = '';
}
