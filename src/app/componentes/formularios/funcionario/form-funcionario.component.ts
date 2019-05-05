import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { EstadoCivilEnum } from "src/app/enums/estadoCivilEnum";
import { SexoEnum } from "src/app/enums/sexoEnum";
import { ConselhoEnum } from "src/app/enums/conselhoEnum";
import { FormBase } from "../form.base";
import { UfEnum } from "src/app/enums/ufEnum";

@Component({
    selector: 'form-funcionario',
    templateUrl: './form-funcionario.component.html',
    styleUrls: ['./form-funcionario.component.scss']
})
export class FormFuncionarioComponent extends FormBase {

    @Input()
    public formFuncionario:FormGroup;

    public estadoCivilEnum = EstadoCivilEnum.values();
    public sexoEnum = SexoEnum.values();
    public conselhoEnum = ConselhoEnum.values();
    public ufEnum = UfEnum.values();

    constructor() {
        super();
    }

}