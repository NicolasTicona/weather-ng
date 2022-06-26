import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent]
})
export class AutoCompleteModule {}