import { TabelaComponent } from './../../componentes/tabela-paginada/tabela.component';
import { EditarAgendaComponent } from './editar/editar-agenda.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CadastrarAgendaComponent } from "./cadastrar/cadastrar-agenda.component";
import { FormAgendaComponent } from "src/app/componentes/formularios/agenda/form-agenda.component";
import { PesquisarAgendaComponent } from './pesquisar/pesquisar-agenda.component';

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarAgendaComponent
            },
            {
                path: 'editar/:id', component: EditarAgendaComponent
            }, 
            {
                path: 'pesquisar', component: PesquisarAgendaComponent
            }
        ]
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(router), ModuleCompartilhado],
    declarations: [CadastrarAgendaComponent, EditarAgendaComponent, PesquisarAgendaComponent, FormAgendaComponent, TabelaComponent]
})
export class AgendaModule {}