import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../../../models/wallet/block.model';
import { Grid } from '../../../models/wallet/grid.model';

@Component({
  selector: 'thred-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor() {}

  items: { type: number; data: any }[] = [];
  overrideItems?: { type: number; data: any }[];
  
  type = 0
  grid!: Grid;

  @Input() set defaultItems(items: {block: number, data: any[]} | undefined) {
    if (items && (items.data as any[])) {
      this.overrideItems = items.data.map((item: any) => {
        return {
          type: items.block,
          data: item,
        };
      });
    }
  }

  @Input() set block(block: Block) {
    this.grid = block.grid;
    this.type = block.type
    switch (block.type) {
      case 0:
        this.items = (block.nftList.nfts ?? []).map((nft) => {
          return {
            type: block.type,
            data: nft,
          };
        });
        break;
      case 1:
        this.items = (block.imgs ?? []).map((img) => {
          return {
            type: block.type,
            data: img,
          };
        });
        break;
    }
  }

  ngOnInit(): void {}
}
