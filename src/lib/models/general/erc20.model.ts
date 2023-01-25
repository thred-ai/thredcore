import { ethers } from "ethers";
import { Dict } from "../../services/thredcore.service";

export class ERC20 {
  address!: string;
  url!: string;
  name!: string;
  symbol!: string;
  balance!: ethers.BigNumber;
  decimals!: number;
  rates!: Dict<number>;

  constructor(
    address: string,
    url: string,
    name: string,
    symbol: string,
    balance: ethers.BigNumber,
    decimals: number,
    rates?: Dict<number>,
  ) {
    this.address = address;
    this.url = url;
    this.name = name;
    this.symbol = symbol;
    this.balance = balance;
    this.decimals = decimals;
    this.rates = rates ?? {
      usd: 0,
      cad: 0,
      gbp: 0,
      eur: 0,
    }
  }
}
