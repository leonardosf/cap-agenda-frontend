import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";

const router: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login', component: LoginComponent
            }
        ]
    }
]
@NgModule({
    declarations: [ LoginComponent ],
    imports: [ CommonModule, RouterModule.forChild(router), ModuleCompartilhado]
})
export class LoginModule { }