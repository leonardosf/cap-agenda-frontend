import { NgModule } from "@angular/core";
import { ModuleCompartilhado } from "src/app/modulos-compartilhados/compartilhado.module";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { AuthGuardService } from "src/app/seguranca/auth-guard.service";


const router: Routes = [
    {
        path: '', component: IndexComponent,
        canActivate: [ AuthGuardService ] 
    }
]
@NgModule({
    declarations: [IndexComponent],
    imports: [RouterModule.forChild(router), CommonModule, ModuleCompartilhado]
})
export class IndexModule { }