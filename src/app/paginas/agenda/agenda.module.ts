import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { AgendaComponent } from "./agenda.component";
import { FormAgendaComponent } from "src/app/componentes/formularios/agenda/form-agenda.component";

const router: Routes = [
    {
        path: '', component: AgendaComponent
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(router), ModuleCompartilhado],
    declarations: [AgendaComponent, FormAgendaComponent]
})
export class AgendaModule {}