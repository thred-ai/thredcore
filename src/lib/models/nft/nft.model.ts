
export class NFT {
  title: string;
  description: string;
  img: string;
  address: string;
  tokenId: number;
  chainId: number
  type?: 'ERC1155' | 'ERC721'

  constructor(
    title: string,
    description: string,
    img: string,
    address: string,
    tokenId: number,
    chainId: number,
    type?: 'ERC1155' | 'ERC721'
  ) {
    this.title = title ?? '';
    this.description = description ?? '';
    this.img = img ?? ''
    this.address = address ?? '';
    this.tokenId = tokenId ?? 0;
    this.chainId = chainId ?? 0
    this.type = type
  }
}
