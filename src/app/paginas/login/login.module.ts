import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";


@NgModule({
    declarations: [ LoginComponent ],
    imports: [ CommonModule, ModuleCompartilhado]
})
export class LoginModule { }