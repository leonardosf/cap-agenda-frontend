import { AuthGuardService } from './../../seguranca/auth-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { CadastrarFuncionarioComponent } from "./cadastrar/cadastrar-funcionario.component";
import { EditarFuncionarioComponent } from "./editar/editar-funcionario.component";
import { VisualizarFuncionarioComponent } from "./visualizar/visualizar-funcionario.component";
import { PesquisarFuncionarioComponent } from "./pesquisar/pesquisar-funcionario.component";
import { FormFuncionarioComponent } from "src/app/componentes/formularios/funcionario/form-funcionario.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarFuncionarioComponent
            },
            {
                path: 'editar/:id', component: EditarFuncionarioComponent
            },
            {
                path: 'visualizar/:id', component: VisualizarFuncionarioComponent
            },
            {
                path: 'pesquisar', component: PesquisarFuncionarioComponent
            }
        ],
        canActivate: [ AuthGuardService ] 
    }
]
@NgModule({
    declarations: [CadastrarFuncionarioComponent, EditarFuncionarioComponent,
        VisualizarFuncionarioComponent, PesquisarFuncionarioComponent, FormFuncionarioComponent],
    exports: [],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class FuncionarioModule { }