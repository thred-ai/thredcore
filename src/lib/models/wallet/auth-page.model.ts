import { Media } from '../general/media.model';
import { Bar } from './bar.model';
import { Block } from './block.model';
import { Page } from './page.model';
import { Tab } from './tab.model';

export class AuthPage extends Page {
  img?: Media;
  text?: string;

  constructor(
    id: string,
    title: string,
    name: string,
    blocks: Array<Block>,
    img?: Media,
    text?: string,
    type?: number,
    url?: string,
    tab?: Tab,
    bar?: Bar,
    position?: number,
    backgroundColor?: string,
    textColor?: string,
    detailColor?: string,
    icon: string = "login"
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

    this.img = img;
    this.text = text;
  }
}
