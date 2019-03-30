import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpService } from "src/app/servicos/http.service";

@Component({
    selector: 'form-telefone',
    templateUrl: './form-telefone.component.html',
    styleUrls: ['./form-telefone.component.scss']
})
export class FormTelefoneComponent {

    @Input()
    public formGenerico:FormGroup;

    tiposTelefone;

    constructor(public http:HttpService) {
        this.comporTipoTelefone();
    }

    comporTipoTelefone() {
        this.http.obterTipoTelefone(callback => {
            this.tiposTelefone = callback; 
        });
    }

    getErrorMessage() {
        return 'Campo obrigatório';
    }
}