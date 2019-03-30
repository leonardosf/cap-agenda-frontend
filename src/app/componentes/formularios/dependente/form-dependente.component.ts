import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'form-dependente',
    templateUrl: './form-dependente.component.html',
    styleUrls: ['./form-dependente.component.scss']
})
export class FormDependenteComponent {

    @Input()
    public formAssociado:FormGroup;

    constructor() {
    }

    getErrorMessage() {
        return 'Campo obrigatório';
    }
}