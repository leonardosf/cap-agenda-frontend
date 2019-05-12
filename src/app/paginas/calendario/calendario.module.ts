import { Routes, RouterModule } from "@angular/router";
import { CalendarioComponent } from "./calendario.component";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullCalendarModule } from '@fullcalendar/angular';

const router: Routes = [
    {
        path: '', component: CalendarioComponent
    }
]

@NgModule({
    imports:[CommonModule, FullCalendarModule, RouterModule.forChild(router), ModuleCompartilhado],
    declarations: [CalendarioComponent],
    exports: [CalendarioComponent]
})
export class CalendarioModule {}