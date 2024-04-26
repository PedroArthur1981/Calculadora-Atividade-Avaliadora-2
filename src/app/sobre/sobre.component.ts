import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  show:boolean=false;
  showSobre(){
    this.show=!this.show;
  }


}
