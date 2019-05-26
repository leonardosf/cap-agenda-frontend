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
            {
                path: '', redirectTo: 'index', pathMatch: 'full',
            },
            {
                path: 'index', loadChildren: './index/index.module#IndexModule',
            },
            {
                path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaModule',
            },
            {
                path: 'associado', loadChildren: './associado/associado.module#AssociadoModule',
            },
            {
                path: 'medico', loadChildren: './medico/medico.module#MedicoModule'
            },
            {
                path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule'
            },
            {
                path: 'funcionario', loadChildren: './funcionario/funcionario.module#FuncionarioModule'
            },
            {
                path: 'consultorio', loadChildren: './consultorio/consultorio.module#ConsultorioModule'
            },
            {
                path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioModule'
            },
            {
                path: 'autenticacao', loadChildren: './login/login.module#LoginModule'
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