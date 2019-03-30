import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'form-endereco',
    templateUrl: './form-endereco.component.html',
    styleUrls: ['./form-endereco.component.scss']
})
export class FormEnderecoComponent {

    @Input()
    public formGenerico:FormGroup;

    constructor() {
    }

    getErrorMessage() {
        return 'Campo obrigatório';
    }
}