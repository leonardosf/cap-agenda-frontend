import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "../modulos-compartilhados/compartilhado.module";
import { LoadingComponent } from "../componentes/loading/loading.component";
import { MenuComponent } from "../menu/menu.component";
import { BrowserModule } from "@angular/platform-browser";

const router:Routes = [
    {
        path: 'page', component: MenuComponent,
        children: [
            // {
            //     path: '', redirectTo: 'index', pathMatch: 'full',
            // },
            // {
            //     path: 'index', component: IndeComponent,
            // },
            {
                path: 'associado', loadChildren: './associado/associado.module#AssociadoModule',
            },
            {
                path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule'
            },
            {
                path: 'medico', loadChildren: './medico/medico.module#MedicoModule'
            },
            {
                path: 'consultorio', loadChildren: './consultorio/consultorio.module#ConsultorioModule'
            },
            {
                path: 'funcionario', loadChildren: './funcionario/funcionario.module#FuncionarioModule'
            }
        ]
    },
]

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(router), ModuleCompartilhado],
    declarations: [
        MenuComponent,
        LoadingComponent],
    exports: [
        MenuComponent,
        LoadingComponent]
})
export class PaginaModule {}