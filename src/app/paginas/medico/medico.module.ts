import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { CadastrarMedicoComponent } from "./cadastrar/cadastrar-medico.component";
import { EditarMedicoComponent } from "./editar/editar-medico.component";
import { VisualizarMedicoComponent } from "./visualizar/visualizar-medico.component";
import { PesquisarMedicoComponent } from "./pesquisar/pesquisar-medico.component";
import { FormMedicoComponent } from "src/app/componentes/formularios/medico/form-medico.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarMedicoComponent
            },
            {
                path: 'editar', component: EditarMedicoComponent
            },
            {
                path: 'visualizar', component: VisualizarMedicoComponent
            },
            {
                path: 'pesquisar', component: PesquisarMedicoComponent
            }
        ]
    }
]
@NgModule({
    declarations: [CadastrarMedicoComponent, EditarMedicoComponent, VisualizarMedicoComponent,
        PesquisarMedicoComponent, FormMedicoComponent],
    exports: [],
    imports: [CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class MedicoModule { }