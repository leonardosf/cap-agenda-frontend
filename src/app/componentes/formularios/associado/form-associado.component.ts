import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'form-associado',
    templateUrl: './form-associado.component.html',
    styleUrls: ['./form-associado.component.scss']
})
export class FormAssociadoComponent {

    @Input()
    public formAssociado:FormGroup;

    salvar() {

    }

    getErrorMessage() {
        return 'Campo obrigatório';
    }
}