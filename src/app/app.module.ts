import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SobreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
