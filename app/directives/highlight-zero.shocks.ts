import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight-zero-shocks]' })
/** Highlight the attached shocks in red, if == 0 */
export class HighlightZeroShocksDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    if(el.nativeElement.value = 0)
        { renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red'); }
  }
}