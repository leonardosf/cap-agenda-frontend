import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpService } from "src/app/servicos/http.service";
import { SexoEnum } from "src/app/enums/sexoEnum";
import { FormBase } from "../form.base";

@Component({
    selector: 'form-dependente',
    templateUrl: './form-dependente.component.html',
    styleUrls: ['./form-dependente.component.scss']
})
export class FormDependenteComponent extends FormBase implements OnInit{

    @Input()
    public formAssociado:FormGroup;

    public sexoEnum = SexoEnum.values();

    tipoParentesco;

    constructor(public http:HttpService) {
        super();
    }

    ngOnInit(): void {
        this.comporParentescos();
    }

    comporParentescos() {
        this.http.obterTipoParentescos(callback => {
            this.tipoParentesco = callback; 
        });
    }
}