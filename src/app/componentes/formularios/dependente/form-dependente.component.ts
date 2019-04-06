import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpService } from "src/app/servicos/http.service";

@Component({
    selector: 'form-dependente',
    templateUrl: './form-dependente.component.html',
    styleUrls: ['./form-dependente.component.scss']
})
export class FormDependenteComponent implements OnInit{

    @Input()
    public formAssociado:FormGroup;

    tipoParentesco;

    constructor(public http:HttpService) {}

    ngOnInit(): void {
        this.comporParentescos();
    }

    getErrorMessage() {
        return 'Campo obrigatório';
    }

    comporParentescos() {
        this.http.obterTipoParentescos(callback => {
            this.tipoParentesco = callback; 
        });
    }
}