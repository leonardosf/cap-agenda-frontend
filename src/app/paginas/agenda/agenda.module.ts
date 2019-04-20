import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CadastrarAgendaComponent } from "./cadastrar/cadastrar-agenda.component";
import { FormAgendaComponent } from "src/app/componentes/formularios/agenda/form-agenda.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'cadastrar', component: CadastrarAgendaComponent
            }
        ]
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(router), ModuleCompartilhado],
    declarations: [CadastrarAgendaComponent, FormAgendaComponent]
})
export class AgendaModule {}