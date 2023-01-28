import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Block } from '../../../models/wallet/block.model';
import { Page } from '../../../models/wallet/page.model';

@Component({
  selector: 'thred-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  constructor() { }

  @Input() block!: Block
  @Input() active!: boolean
  @Input() id!: string
  @Input() page!: Page
  @Input() defaultItems?: any[]

  @Output() clicked = new EventEmitter<any>();
  @Output() clickedItem = new EventEmitter<{ type: number; data: any }>();

  ngOnInit(): void {
  }


}
