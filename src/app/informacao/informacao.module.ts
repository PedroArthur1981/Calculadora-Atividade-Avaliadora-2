import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from '../sobre/sobre.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SobreComponent
  ],
  exports: [SobreComponent],
})
export class InformacaoModule { }
