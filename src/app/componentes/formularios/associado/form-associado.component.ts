import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { EstadoCivilEnum } from "src/app/enums/estadoCivilEnum";
import { SexoEnum } from "src/app/enums/sexoEnum";

@Component({
    selector: 'form-associado',
    templateUrl: './form-associado.component.html',
    styleUrls: ['./form-associado.component.scss']
})
export class FormAssociadoComponent {

    @Input()
    public formAssociado:FormGroup;

    public estadoCivilEnum = EstadoCivilEnum.values();
    public sexoEnum = SexoEnum.values();

    constructor(){}

    getErrorMessage() {
        return 'Campo obrigatório';
    }
}