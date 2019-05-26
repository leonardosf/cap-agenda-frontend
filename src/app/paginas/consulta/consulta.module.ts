import { AuthGuardService } from './../../seguranca/auth-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { EditarConsultaComponent } from './editar/editar-consulta.component';
import { VisualizarConsultaComponent } from './visualizar/visualizar-consulta.component';
import { PesquisarConsultaComponent } from './pesquisar/pesquisar-consulta.component';

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'editar/:id', component: EditarConsultaComponent
            },
            {
                path: 'visualizar/:id', component: VisualizarConsultaComponent
            },
            {
                path: 'pesquisar', component: PesquisarConsultaComponent
            }
        ],
        canActivate: [ AuthGuardService ] 
    }
]
@NgModule({
    declarations: [EditarConsultaComponent, VisualizarConsultaComponent, PesquisarConsultaComponent],
    exports: [],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class ConsultaModule { }