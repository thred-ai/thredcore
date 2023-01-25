import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  Layout,
  Page,
  Block,
  NFTList,
  NFT,
  Grid,
  Shadow,
  Border,
  Tab,
  Bar,
  Wallet,
  AccountPage,
  Developer,
  Chain,
} from '../models';

export interface Dict<T> {
  [key: string]: T;
}

@Injectable({
  providedIn: 'root',
})
export class ThredCoreService {
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private router: Router
  ) {}

  loadedChains = new BehaviorSubject<any[]>([]);
  loadedUser = new BehaviorSubject<Developer | null>(null);
  loadedNFTs = new BehaviorSubject<any[]>([]);

  syncPages(layouts: Dict<Layout> = {}) {
    let lays: Dict<Layout> = {};

    Object.values(layouts)?.map((layout) => {
      lays[layout.type] = new Layout(
        layout.name,
        layout.type,
        layout.pages.map((page) => {
          if (page.type == 2) {
            return this.copyAccountPage(page);
          } else {
            return this.copyPage(page);
          }
        }),
        layout.authPage,
        layout.id
      );
    });

    return lays;
  }

  copyPage(page: Page) {
    return new Page(
      page.id,
      page.title,
      page.name,
      page.blocks?.map((block) => {
        return new Block(
          new NFTList(
            block.nftList?.type,
            block.nftList?.nfts?.map((nft: NFT) => {
              return new NFT(
                nft.title,
                nft.description,
                nft.img,
                nft.address,
                nft.tokenId,
                nft.chainId,
                nft.type
              );
            })
          ),
          block.type,
          block.imgs,
          new Grid(
            block.grid?.spacing,
            block.grid?.rows,
            block.grid?.corners,
            block.grid?.alignment,
            block.grid?.backgroundColor,
            block.grid?.detailColor,
            block.grid?.textColor,
            block.grid?.type,
            new Shadow(
              block.grid?.shadow?.color,
              block.grid?.shadow?.blur,
              block.grid?.shadow?.direction
            ),
            {
              left: new Border(
                block.grid?.borders?.left?.name,
                block.grid?.borders?.left?.color,
                block.grid?.borders?.left?.width
              ),
              right: new Border(
                block.grid?.borders?.right?.name,
                block.grid?.borders?.right?.color,
                block.grid?.borders?.right?.width
              ),
              top: new Border(
                block.grid?.borders?.top?.name,
                block.grid?.borders?.top?.color,
                block.grid?.borders?.top?.width
              ),
              bottom: new Border(
                block.grid?.borders?.bottom?.name,
                block.grid?.borders?.bottom?.color,
                block.grid?.borders?.bottom?.width
              ),
            }
          ),
          block.html,
          block.backgroundColor,
          block.corners,
          block.animations,
          block.vids,
          block.htmlTemplate,
          block.fontName,
          block.padding,
          block.detailColor,
          block.textColor,
          {
            left: new Border(
              block.borders?.left?.name,
              block.borders?.left?.color,
              block.borders?.left?.width
            ),
            right: new Border(
              block.borders?.right?.name,
              block.borders?.right?.color,
              block.borders?.right?.width
            ),
            top: new Border(
              block.borders?.top?.name,
              block.borders?.top?.color,
              block.borders?.top?.width
            ),
            bottom: new Border(
              block.borders?.bottom?.name,
              block.borders?.bottom?.color,
              block.borders?.bottom?.width
            ),
          },
          new Shadow(
            block.shadow?.color,
            block.shadow?.blur,
            block.shadow?.direction
          )
        );
      }),
      page.type,
      page.url,
      new Tab(
        page.tab?.backgroundColor,
        page.tab?.detailColor,
        page.tab?.textColor,
        page.tab?.corners
      ),
      new Bar(
        page.bar?.backgroundColor,
        page.bar?.detailColor,
        page.bar?.textColor,
        page.bar?.corners,
        page.bar?.visible,
        page.bar?.font,
        page.bar?.content,
        page.bar?.mode
      ),
      page.position,
      page.backgroundColor,
      page.textColor,
      page.detailColor,
      page.icon
    );
  }

  copyAccountPage(page: AccountPage) {
    return new AccountPage(
      page.id,
      page.title,
      page.name,
      page.blocks?.map((block) => {
        return new Block(
          new NFTList(
            block.nftList?.type,
            block.nftList?.nfts?.map((nft: NFT) => {
              return new NFT(
                nft.title,
                nft.description,
                nft.img,
                nft.address,
                nft.tokenId,
                nft.chainId,
                nft.type
              );
            })
          ),
          block.type,
          block.imgs,
          new Grid(
            block.grid?.spacing,
            block.grid?.rows,
            block.grid?.corners,
            block.grid?.alignment,
            block.grid?.backgroundColor,
            block.grid?.detailColor,
            block.grid?.textColor,
            block.grid?.type,
            new Shadow(
              block.grid?.shadow?.color,
              block.grid?.shadow?.blur,
              block.grid?.shadow?.direction
            ),
            {
              left: new Border(
                block.grid?.borders?.left?.name,
                block.grid?.borders?.left?.color,
                block.grid?.borders?.left?.width
              ),
              right: new Border(
                block.grid?.borders?.right?.name,
                block.grid?.borders?.right?.color,
                block.grid?.borders?.right?.width
              ),
              top: new Border(
                block.grid?.borders?.top?.name,
                block.grid?.borders?.top?.color,
                block.grid?.borders?.top?.width
              ),
              bottom: new Border(
                block.grid?.borders?.bottom?.name,
                block.grid?.borders?.bottom?.color,
                block.grid?.borders?.bottom?.width
              ),
            }
          ),
          block.html,
          block.backgroundColor,
          block.corners,
          block.animations,
          block.vids,
          block.htmlTemplate,
          block.fontName,
          block.padding,
          block.detailColor,
          block.textColor,
          {
            left: new Border(
              block.borders?.left?.name,
              block.borders?.left?.color,
              block.borders?.left?.width
            ),
            right: new Border(
              block.borders?.right?.name,
              block.borders?.right?.color,
              block.borders?.right?.width
            ),
            top: new Border(
              block.borders?.top?.name,
              block.borders?.top?.color,
              block.borders?.top?.width
            ),
            bottom: new Border(
              block.borders?.bottom?.name,
              block.borders?.bottom?.color,
              block.borders?.bottom?.width
            ),
          },
          new Shadow(
            block.shadow?.color,
            block.shadow?.blur,
            block.shadow?.direction
          )
        );
      }),
      page.bio,
      page.displayName,
      page.displayPic,
      page.type,
      page.url,
      new Tab(
        page.tab?.backgroundColor,
        page.tab?.detailColor,
        page.tab?.textColor,
        page.tab?.corners
      ),
      new Bar(
        page.bar?.backgroundColor,
        page.bar?.detailColor,
        page.bar?.textColor,
        page.bar?.corners,
        page.bar?.visible,
        page.bar?.font,
        page.bar?.content,
        page.bar?.mode
      ),
      page.position,
      page.backgroundColor,
      page.textColor,
      page.detailColor,
      page.icon
    );
  }

  syncWallet(wallet: any, chainList: any[] = []) {
    return new Wallet(
      wallet.id,
      wallet.creatorId,
      wallet.created,
      wallet.modified,
      wallet.creatorName,
      wallet.name,
      wallet.displayUrl,
      wallet.description,
      wallet.verified,
      wallet.reviews,
      wallet.rating,
      wallet.downloads,
      this.syncChains(chainList, wallet.chains),
      wallet.coverUrl,
      wallet.status,
      wallet.installWebhook,
      wallet.whitelist,
      wallet.authStyle,
      this.syncPages(wallet.activeLayouts),
      wallet.tracking,
      wallet.displayedLayouts
    );
  }

  syncChains(chains: any[], walletChains?: string[]) {
    if (walletChains) {
      return walletChains.flatMap((wc) => {
        let sameChain = chains.find((c) => c.id == wc);
        if (sameChain) {
          return sameChain;
        }
        return [];
      });
    }
    return chains.map((c) => {
      let chain = new Chain(c.name, c.id, c.symbol, c.price, !c.main, c.rank, c.url);
      chain.balance = c.balance
      return chain
    });
  }
}
