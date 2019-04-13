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
import { LoadingComponent } from './componentes/loading/loading.component';
import { PesquisarAssociadoComponent } from './paginas/pesquisar/associado/pesquisar-associado.component';
import { TabelaAssociadoComponent } from './componentes/tabelas/associado/tabela-associado.component';
import { VisualizarAssociadoComponent } from './paginas/visualizar/associado/visualizar-associado.component';
import { EditarAssociadoComponent } from './paginas/editar/associado/editar-associado.component';
import { NumeroDiretiva } from './diretivas/validadores/numero.diretiva';
import { MascaraDirective } from './diretivas/mascaras/mascara';
// import { MascaraDirective } from './diretivas/mascaras/mascara';

const router = [{
  path: 'cadastro',
  component: AssociadoComponent
  },
  {
    path: 'pesquisar/associado',
    component: PesquisarAssociadoComponent
  },
  {
    path: 'visualizar/associado',
    component: VisualizarAssociadoComponent
  },
  {
    path: 'editar/associado',
    component: EditarAssociadoComponent
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
    FormTelefoneComponent,
    LoadingComponent,
    PesquisarAssociadoComponent,
    TabelaAssociadoComponent,
    VisualizarAssociadoComponent,
    EditarAssociadoComponent,
    NumeroDiretiva,
    MascaraDirective
  ],
  imports: [BrowserModule, ModuleCompartilhado, LayoutModule, FlexLayoutModule, HttpClientModule,
    RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NumeroDiretiva, MascaraDirective]
})
export class AppModule { }
