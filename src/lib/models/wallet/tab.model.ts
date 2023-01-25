export class Tab {
  backgroundColor: string;
  detailColor: string;
  textColor: string;
  corners: number;

  constructor(
    backgroundColor?: string,
    detailColor?: string,
    textColor?: string,
    corners?: number
  ) {
    this.backgroundColor = backgroundColor ?? '#FFFFFF';
    this.corners = corners ?? 0;
    this.detailColor = detailColor ?? '#000000';
    this.textColor = textColor ?? '#000000';
  }
}
