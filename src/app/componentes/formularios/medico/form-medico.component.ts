import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { EstadoCivilEnum } from "src/app/enums/estadoCivilEnum";
import { SexoEnum } from "src/app/enums/sexoEnum";
import { FormBase } from "../form.base";

@Component({
    selector: 'form-medico',
    templateUrl: './form-medico.component.html',
    styleUrls: ['./form-medico.component.scss']
})
export class FormMedicoComponent extends FormBase {

    @Input()
    public formMedico:FormGroup;

    public estadoCivilEnum = EstadoCivilEnum.values();
    public sexoEnum = SexoEnum.values();

    constructor() {
        super();
    }

}