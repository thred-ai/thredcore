import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thred-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() mode: 'light' | 'dark' = 'light'
  @Input() text?: string


  constructor() { }

  ngOnInit(): void {
  }

}
