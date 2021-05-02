import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleKeyboardComponent } from './simple-keyboard.component';

@NgModule({
  declarations: [SimpleKeyboardComponent],
  imports: [CommonModule],
  exports: [SimpleKeyboardComponent],
})
export class SimpleKeyboardModule {}
