import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleCompartilhado } from './modulos-compartilhados/compartilhado.module';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule } from '@angular/router';
import { AssociadoComponent } from './paginas/cadastro/associado/associado.component';
import { MenuComponent } from './menu/menu.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LinhaComponent } from './componentes/linha/linha.component';
import { FormAssociadoComponent } from './componentes/formularios/associado/form-associado.component';

const router = [{
  path: 'cadastro',
  component: AssociadoComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AssociadoComponent,
    FormAssociadoComponent,
    LinhaComponent
  ],
  imports: [BrowserModule, ModuleCompartilhado, LayoutModule, FlexLayoutModule,
    RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
