import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaginaComponent } from "./pagina.component";
import { ModuleCompartilhado } from "../modulos-compartilhados/compartilhado.module";
import { MascaraDirective } from "../diretivas/mascaras/mascara";
import { NumeroDiretiva } from "../diretivas/validadores/numero.diretiva";
import { AgendaComponent } from "./agenda/agenda.component";
import { EditarAssociadoComponent } from "./associado/editar/editar-associado.component";
import { VisualizarAssociadoComponent } from "./associado/visualizar/visualizar-associado.component";
import { TabelaAssociadoComponent } from "../componentes/tabelas/associado/tabela-associado.component";
import { PesquisarAssociadoComponent } from "./associado/pesquisar/pesquisar-associado.component";
import { LoadingComponent } from "../componentes/loading/loading.component";
import { FormAgendaComponent } from "../componentes/formularios/agenda/form-agenda.component";
import { FormTelefoneComponent } from "../componentes/formularios/telefone/form-telefone.component";
import { FormEnderecoComponent } from "../componentes/formularios/endereco/form-endereco.component";
import { FormDependenteComponent } from "../componentes/formularios/dependente/form-dependente.component";
import { InputTextoComponent } from "../componentes/input/input-texto.component";
import { LinhaComponent } from "../componentes/linha/linha.component";
import { FormAssociadoComponent } from "../componentes/formularios/associado/form-associado.component";
import { MenuComponent } from "../menu/menu.component";
import { CadastrarAssociadoComponent } from "./associado/cadastrar/cadastrar-associado.component";
import { BrowserModule } from "@angular/platform-browser";

const router:Routes = [
    {
        path: 'page', component: MenuComponent,
        children: [
            // {
            //     path: '', redirectTo: 'index', pathMatch: 'full',
            // },
            // {
            //     path: 'index', component: IndeComponent,
            // },
            {
                path: 'associado', loadChildren: './associado/associado.module#AssociadoModule',
            },
            {
                path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule'
            }
        ]
    },
]

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(router), ModuleCompartilhado],
    declarations: [
        MenuComponent,
        LoadingComponent],
    exports: [
        MenuComponent,
        LoadingComponent]
})
export class PaginaModule {}