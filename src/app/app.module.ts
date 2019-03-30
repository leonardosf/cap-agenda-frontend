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
import { FormDependenteComponent } from './componentes/formularios/dependente/form-dependente.component';
import { FormEnderecoComponent } from './componentes/formularios/endereco/form-endereco.component';
import { FormTelefoneComponent } from './componentes/formularios/telefone/form-telefone.component';
import { HttpClientModule } from '@angular/common/http';

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
    LinhaComponent,
    FormDependenteComponent,
    FormEnderecoComponent,
    FormTelefoneComponent
  ],
  imports: [BrowserModule, ModuleCompartilhado, LayoutModule, FlexLayoutModule, HttpClientModule,
    RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
