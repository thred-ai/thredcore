import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
