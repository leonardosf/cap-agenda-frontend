import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBase } from "../form.base";
import { UfEnum } from "src/app/enums/ufEnum";

@Component({
    selector: 'form-endereco',
    templateUrl: './form-endereco.component.html',
    styleUrls: ['./form-endereco.component.scss']
})
export class FormEnderecoComponent extends FormBase {

    @Input()
    public formGenerico:FormGroup;

    public ufEnum = UfEnum.values();

    constructor() {
        super();
    }

}