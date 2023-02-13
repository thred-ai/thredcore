import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "autosize",
})
export class AutosizePipe implements PipeTransform {
  transform(value: number, type: "width" | "height", w: {innerWidth: number, innerHeight: number} = window, layoutmode = 'mobile', onlySmaller = true): number {
    let vw = layoutmode == 'desktop' ? 2048 : 393;
    let vh = layoutmode == 'desktop' ? 1192 : 852;

    let mvw = w.innerWidth;
    let mvh = w.innerHeight;

    if (mvw == vw && type == "width") {
      return value;
    }

    if (mvh == vh && type == "height") {
      return value;
    }

    let difference = type == "width" ? mvw / vw : mvh / vh;

    if (onlySmaller && difference > 1){
      return value
    }

    return value * difference;
  }
}
