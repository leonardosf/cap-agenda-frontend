import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastrarAssociadoComponent } from "./cadastrar/cadastrar-associado.component";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { FormAssociadoComponent } from "src/app/componentes/formularios/associado/form-associado.component";
import { VisualizarAssociadoComponent } from "./visualizar/visualizar-associado.component";
import { FormDependenteComponent } from "src/app/componentes/formularios/dependente/form-dependente.component";
import { FormEnderecoComponent } from "src/app/componentes/formularios/endereco/form-endereco.component";
import { FormTelefoneComponent } from "src/app/componentes/formularios/telefone/form-telefone.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "src/app/menu/menu.component";
import { EditarAssociadoComponent } from "./editar/editar-associado.component";
import { PesquisarAssociadoComponent } from "./pesquisar/pesquisar-associado.component";
import { TabelaAssociadoComponent } from "src/app/componentes/tabelas/associado/tabela-associado.component";

const router:Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarAssociadoComponent
            },
            {
                path: 'editar', component: EditarAssociadoComponent
            },
            {
                path: 'visualizar', component: VisualizarAssociadoComponent
            },
            {
                path: 'pesquisar', component: PesquisarAssociadoComponent
            }
        ]
    }
]
@NgModule({
    declarations:[CadastrarAssociadoComponent, FormAssociadoComponent, FormAssociadoComponent,
        FormEnderecoComponent, FormTelefoneComponent, FormDependenteComponent,
        EditarAssociadoComponent, VisualizarAssociadoComponent, PesquisarAssociadoComponent,
        TabelaAssociadoComponent],
    exports:[],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class AssociadoModule {}