import { FormBase } from './../form.base';
import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'form-agenda',
    templateUrl: './form-agenda.component.html',
    styleUrls: ['./form-agenda.component.scss']
})
export class FormAgendaComponent extends FormBase {

    @Input()
    public formAgenda: FormGroup;

    constructor(){
        super()
    }

}