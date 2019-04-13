import { AgendaFormGroup } from './agenda.form.group';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from '../../componentes/formularios/form.base';


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent extends FormBase implements OnInit {

    public formAgenda: FormGroup;

    constructor(private fb: FormBuilder) {
        super()
        const agendaFormGroup = new AgendaFormGroup(this.fb)
        this.formAgenda = agendaFormGroup.montarFormGroup();        
     }

    ngOnInit() {
    }

}

