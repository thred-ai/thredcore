import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../../models/wallet/page.model';
import { Tab } from '../../../models/wallet/tab.model';


@Component({
  selector: 'thred-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {
  constructor() {}

  @Input() position!: number;
  @Input() tab!: Tab;
  @Input() pages!: Page[];
  @Input() selectedIndex!: number;
  @Input() editable!: boolean;

  @Output() indexChanged = new EventEmitter<number>();

  @Output() update = new EventEmitter<CdkDragDrop<Page[]>>();

  ngOnInit(): void {
    console.log(this.displayFrame)
  }

  onDropPage(event: CdkDragDrop<Page[]>): void {

    this.update.emit(event);
  }

  @Input() displayFrame: { innerWidth: number; innerHeight: number } = window;

  layoutConsts = {
    barHeight: 60,
    iconSize: 25
  };
}
