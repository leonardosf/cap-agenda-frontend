import { AuthGuardService } from './../../seguranca/auth-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { CadastrarConsultorioComponent } from "./cadastrar/cadastrar-consultorio.component";
import { EditarConsultorioComponent } from "./editar/editar-consultorio.component";
import { VisualizarConsultorioComponent } from "./visualizar/visualizar-consultorio.component";
import { PesquisarConsultorioComponent } from "./pesquisar/pesquisar-consultorio.component";
import { FormConsultorioComponent } from "src/app/componentes/formularios/consultorio/form-consultorio.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarConsultorioComponent
            },
            {
                path: 'editar/:id', component: EditarConsultorioComponent
            },
            {
                path: 'visualizar/:id', component: VisualizarConsultorioComponent
            },
            {
                path: 'pesquisar', component: PesquisarConsultorioComponent
            }
        ],
        canActivate: [ AuthGuardService ] 
    }
]
@NgModule({
    declarations: [CadastrarConsultorioComponent, EditarConsultorioComponent,
        VisualizarConsultorioComponent, PesquisarConsultorioComponent, FormConsultorioComponent],
    exports: [],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class ConsultorioModule { }