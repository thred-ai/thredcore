import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { BlockComponent } from './components/wallet/block/block.component';
import { GridItemComponent } from './components/wallet/grid-item/grid-item.component';
import { GridComponent } from './components/wallet/grid/grid.component';
import { NavigationBarComponent } from './components/wallet/navigation-bar/navigation-bar.component';
import { PageComponent } from './components/wallet/page/page.component';
import { TabBarComponent } from './components/wallet/tab-bar/tab-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ColorShadePipe } from './pipes/color-shade.pipe';
import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './components/wallet/auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CastPipe } from './pipes/cast.pipe';
import { AccountComponent } from './components/wallet/account/account.component';
import { AddressPipe } from './pipes/address.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { FormatEtherPipe } from './pipes/format-ether.pipe';
import { LoaderComponent } from './components/general/loader/loader.component';

@NgModule({
  declarations: [
    PageComponent,
    BlockComponent,
    GridComponent,
    GridItemComponent,
    NavigationBarComponent,
    TabBarComponent,
    AuthComponent,
    ColorShadePipe,
    CastPipe,
    AddressPipe,
    SafeUrlPipe,
    FormatEtherPipe,
    AccountComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ScrollingModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    IonicModule.forRoot()
  ],
  exports: [
    PageComponent,
    BlockComponent,
    GridComponent,
    GridItemComponent,
    NavigationBarComponent,
    TabBarComponent,
    LoaderComponent,
    CastPipe,
    FormatEtherPipe,
    AddressPipe,
  ],
})
export class ThredCoreModule {}
