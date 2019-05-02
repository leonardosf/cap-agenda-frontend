import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBase } from "../form.base";
import { UfEnum } from "src/app/enums/ufEnum";

@Component({
    selector: 'form-consultorio',
    templateUrl: './form-consultorio.component.html',
    styleUrls: ['./form-consultorio.component.scss']
})
export class FormConsultorioComponent extends FormBase {

    @Input()
    public formConsultorio:FormGroup;

    public ufEnum = UfEnum.values();

    constructor() {
        super();
    }

}