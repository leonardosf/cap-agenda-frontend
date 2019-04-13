import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleCompartilhado } from './modulos-compartilhados/compartilhado.module';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule } from '@angular/router';
import { CadastrarAssociadoComponent } from './paginas/associado/cadastrar/cadastrar-associado.component';
import { MenuComponent } from './menu/menu.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LinhaComponent } from './componentes/linha/linha.component';
import { FormAssociadoComponent } from './componentes/formularios/associado/form-associado.component';
import { FormDependenteComponent } from './componentes/formularios/dependente/form-dependente.component';
import { FormEnderecoComponent } from './componentes/formularios/endereco/form-endereco.component';
import { FormTelefoneComponent } from './componentes/formularios/telefone/form-telefone.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './componentes/loading/loading.component';
import { PesquisarAssociadoComponent } from './paginas/associado/pesquisar/pesquisar-associado.component';
import { TabelaAssociadoComponent } from './componentes/tabelas/associado/tabela-associado.component';
import { VisualizarAssociadoComponent } from './paginas/associado/visualizar/visualizar-associado.component';
import { EditarAssociadoComponent } from './paginas/associado/editar/editar-associado.component';
import { NumeroDiretiva } from './diretivas/validadores/numero.diretiva';
import { MascaraDirective } from './diretivas/mascaras/mascara';
import { HttpInterceptador } from './interceptador/http-interceptor';

const router = [{
  path: 'cadastro',
  component: CadastrarAssociadoComponent
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
    CadastrarAssociadoComponent,
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
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptador, multi: true}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
