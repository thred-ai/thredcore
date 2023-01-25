import { Component, Input, OnInit } from '@angular/core';
import { Bar } from '../../../models/wallet/bar.model';

@Component({
  selector: 'thred-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  @Input() bar!: Bar
  @Input() position!: number

  ngOnInit(): void {
  }

}
