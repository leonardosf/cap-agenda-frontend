import { AuthGuardService } from './../../seguranca/auth-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastrarAssociadoComponent } from "./cadastrar/cadastrar-associado.component";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { FormAssociadoComponent } from "src/app/componentes/formularios/associado/form-associado.component";
import { VisualizarAssociadoComponent } from "./visualizar/visualizar-associado.component";
import { FormDependenteComponent } from "src/app/componentes/formularios/dependente/form-dependente.component";
import { CommonModule } from "@angular/common";
import { EditarAssociadoComponent } from "./editar/editar-associado.component";
import { PesquisarAssociadoComponent } from "./pesquisar/pesquisar-associado.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarAssociadoComponent
            },
            {
                path: 'editar/:id', component: EditarAssociadoComponent
            },
            {
                path: 'visualizar/:id', component: VisualizarAssociadoComponent
            },
            {
                path: 'pesquisar', component: PesquisarAssociadoComponent
            }
        ],
        canActivate: [ AuthGuardService ] 
    }
]
@NgModule({
    declarations: [CadastrarAssociadoComponent, FormAssociadoComponent,
        FormDependenteComponent, EditarAssociadoComponent, VisualizarAssociadoComponent,
        PesquisarAssociadoComponent],
    exports: [],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class AssociadoModule { }