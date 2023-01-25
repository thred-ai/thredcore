import { AccountPage } from './account-page.model';
import { AuthPage } from './auth-page.model';
import { Page } from './page.model';

export class Layout {
  name!: string;
  type!: string;
  pages!: Page[];
  authPage!: AuthPage;

  id!: string;

  constructor(
    name: string,
    type: string,
    pages: Page[],
    authPage?: AuthPage,
    id?: string
  ) {
    this.name = name;
    this.type = type;
    this.pages = pages;
    this.authPage =
      authPage ??
      new AuthPage('1000', 'Auth', 'auth', [], undefined, undefined, 1, '');
    this.id = id ?? `${new Date().getTime()}`;
  }
}
