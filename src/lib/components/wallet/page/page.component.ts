import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AccountPage } from '../../../models/wallet/account-page.model';
import { AuthPage } from '../../../models/wallet/auth-page.model';
import { Block } from '../../../models/wallet/block.model';
import { Layout } from '../../../models/wallet/layout.model';
import { Page } from '../../../models/wallet/page.model';
import { Dict } from '../../../services/thredcore.service';

@Component({
  selector: 'thred-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  page!: {
    page: Page | AuthPage;
    index: number;
  };


  AuthPage!: AuthPage
  AccountPage!: AccountPage

  @Input() set currentPage(value: { page: Page; index: number }) {
    this.page = value;
    this.changeColor(value.page.detailColor, value.page.backgroundColor, value.page.textColor);
  }

  @Input() editable!: boolean;
  @Input() layout!: Layout;


  @Input() defaultItems?: Dict<any[]>



  @Input() overrideBlock?: {
    block: Block;
    blockIndex: number;
    pageIndex: number;
  };

  @Input() authDetails!: any;
  @Input() accountDetails!: any;

  @Output() authUpdated = new EventEmitter<{type: string, data: any}>();

  @Output() updatePages = new EventEmitter<any>();

  @Output() updateBlocks = new EventEmitter<any>();
  @Output() clickedLayout = new EventEmitter<any>();
  @Output() refreshed = new EventEmitter<any>();

  @Output() edit = new EventEmitter<{
    blockIndex: number;
    pageIndex: number;
  }>();

  @Output() pageChanged = new EventEmitter<number>();

  @ViewChild('mainFrame') mainFrame!: HTMLElement;

  constructor() {}

  ngOnInit(): void {}

  changeColor(detailColor: string, backgroundColor: string, textColor: string) {
    document.documentElement.style.setProperty(
      '--refresher-colour',
      detailColor
    );
    document.documentElement.style.setProperty(
      '--ion-background-color',
      backgroundColor
    );
    document.documentElement.style.setProperty(
      '--field-color',
      textColor
    );
  }

  handleRefresh(event: any) {
    this.refreshed.emit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
