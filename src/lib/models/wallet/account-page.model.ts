import { Bar } from './bar.model';
import { Block } from './block.model';
import { Page } from './page.model';
import { Tab } from './tab.model';

export class AccountPage extends Page {
  bio?: boolean;
  displayPic?: boolean
  displayName?: boolean

  constructor(
    id: string,
    title: string,
    name: string,
    blocks: Array<Block>,
    bio?: boolean,
    displayName?: boolean,
    displayPic?: boolean,
    type?: number,
    url?: string,
    tab?: Tab,
    bar?: Bar,
    position?: number,
    backgroundColor?: string,
    textColor?: string,
    detailColor?: string,
    icon: string = "account_box"
  ) {
    super(
      id,
      title,
      name,
      blocks,
      type,
      url,
      tab,
      bar,
      position,
      backgroundColor,
      textColor,
      detailColor,
      icon
    );

    this.bio = bio ?? false;
    this.displayName = displayName ?? false
    this.displayPic = displayPic ?? false

  }
}
