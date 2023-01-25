import { Component, Input, OnInit } from '@angular/core';
import { Chain, Media } from '../../../models';
import { NFT } from '../../../models/nft/nft.model';
import { Grid } from '../../../models/wallet/grid.model';

@Component({
  selector: 'thred-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
  constructor() {}
  @Input() item!: { type: number; data: any };
  @Input() grid!: Grid;

  NFT!: NFT;
  Media!: Media
  Chain!: Chain

  ngOnInit(): void {}
}
