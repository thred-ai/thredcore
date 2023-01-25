import { Dict } from '../../services/thredcore.service';
import { Chain } from '../general/chain.model';
import { AccountPage } from './account-page.model';
import { Layout } from './layout.model';
import { Page } from './page.model';

export class Wallet {
  name!: string;
  id!: string;
  creatorId!: string;
  creatorName?: string;
  displayUrl!: string;
  coverUrl?: string;
  description?: string;
  verified!: boolean;
  reviews!: number;
  rating!: number;
  downloads!: number;
  chains!: Chain[];
  created!: number;
  modified!: number;
  status!: number;
  installWebhook!: string;
  whitelist?: string[];
  activeLayouts!: Dict<Layout>;
  authStyle!: number;
  tracking!: boolean;
  displayedLayouts?: string[];

  constructor(
    id: string,
    creatorId: string,
    created: number,
    modified?: number,
    creatorName?: string,
    name?: string,
    displayUrl?: string,
    description?: string,
    verified?: boolean,
    reviews?: number,
    rating?: number,
    downloads?: number,
    chains?: Chain[],
    coverUrl?: string,
    status?: number,
    installWebhook?: string,
    whitelist?: string[],
    authStyle?: number,
    activeLayouts?: Dict<Layout>,
    tracking?: boolean,
    displayedLayouts?: string[]
  ) {
    this.id = id;
    this.creatorId = creatorId;
    this.created = created;
    this.modified = modified ?? created;
    this.creatorName = creatorName ?? 'Unknown Developer';
    this.name = name ?? 'My New Wallet';
    this.displayUrl = displayUrl ?? '';
    this.description = description ?? '';
    this.verified = verified ?? false;
    this.reviews = reviews ?? 0;
    this.rating = rating ?? 0;
    this.downloads = downloads ?? 0;
    this.chains = chains ?? [new Chain('Ethereum', 1, 'ETH')];
    this.coverUrl = coverUrl;
    this.status = status ?? 0;
    this.installWebhook = installWebhook ?? '';
    this.whitelist = whitelist ?? [];
    this.authStyle = authStyle ?? 1;
    this.tracking = tracking ?? false;
    this.displayedLayouts = displayedLayouts ?? ['mobile'];

    // this.colorStyle =
    //   colorStyle && (colorStyle?.name ?? '').trim() != ''
    //     ? colorStyle
    //     : new StoreTheme(
    //         'Light',
    //         'light',
    //         'dark',
    //         'light',
    //         'simple',
    //         [255.0, 255.0, 255.0, 1],
    //         [10.0, 10.0, 10.0, 1]
    //       );

    let pages = [
      new Page(
        '1',
        'Home',
        'home',
        [],
        0,
        '',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'home'
      ),
      new AccountPage(
        '1001',
        'Account',
        'account',
        [],
        false,
        false,
        false,
        2,
        ''
      ),
    ];

    this.activeLayouts = activeLayouts ?? {
      desktop: new Layout('Desktop', 'desktop', pages),
      mobile: new Layout('Mobile', 'mobile', pages),
    };
  }
}
