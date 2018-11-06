import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrToArrayPipe } from './pipes/str-to-array.pipe';
import { TestDirectiveDirective } from './test-directive.directive';

@NgModule({
  declarations: [StrToArrayPipe, TestDirectiveDirective],
  imports: [CommonModule],
  exports: [StrToArrayPipe, TestDirectiveDirective],
})
export class SharedModule { }
