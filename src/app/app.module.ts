import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompartilhadoModule } from './modulos-compartilhados/compartilhado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule, CompartilhadoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
