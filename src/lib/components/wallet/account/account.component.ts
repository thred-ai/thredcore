import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { AccountPage } from '../../../models/wallet/account-page.model';

@Component({
  selector: 'thred-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() user?: User
  @Input() page?: AccountPage
  @Input() displayFrame: { innerWidth: number; innerHeight: number } = window;

  @Output() accountUpdated = new EventEmitter<{type: string, data: any}>()

  layoutConsts = {
    labelHeight: 25,
    imgHeight: 100
  };

  constructor() { }

  ngOnInit(): void {
  }

}
