import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {}

  @HostListener('click', ['$event'])
  onClick() {
    console.log('clicked');
    this.changeColor('blue');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('in');
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('out');
    this.changeColor('red');
  }

  changeColor(color) {
    this.renderer.setElementStyle(this.element.nativeElement, 'backgroundColor', color);
  }
}

