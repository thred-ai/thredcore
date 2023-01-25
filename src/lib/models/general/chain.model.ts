import { ethers } from 'ethers';
import { Dict } from '../../services/thredcore.service';

export class Chain {
  name!: string;
  id!: number;
  currency!: string;
  url!: string;
  rates!: Dict<number>;
  isTestnet!: boolean;
  rank!: number;
  balance?: ethers.BigNumber;

  constructor(
    name: string,
    id: number,
    currency: string,
    rates?: Dict<number>,
    isTestnet: boolean = false,
    rank: number = 0,
    url = `https://storage.googleapis.com/thred-protocol.appspot.com/chain-icons/${id}.png`
  ) {
    this.name = name ?? 'Ethereum';
    this.id = id ?? 1;
    this.currency = currency;
    this.rates = rates ?? {
      usd: 0,
      cad: 0,
      gbp: 0,
      eur: 0,
    };
    this.isTestnet = isTestnet;
    this.url = url;
    this.rank = rank;
  }
}
