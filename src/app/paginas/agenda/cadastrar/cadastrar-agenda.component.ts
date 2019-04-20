import { Agenda } from '../../../modelos/agenda/agenda';
import { AgendaService } from '../../../servicos/agenda/agenda.service';
import { AgendaFormGroup } from '../agenda.form.group';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from '../../../componentes/formularios/form.base';


@Component({
    selector: 'app-cad-agenda',
    templateUrl: './cadastrar-agenda.component.html',
    styleUrls: ['./cadastrar-agenda.component.css']
})
export class CadastrarAgendaComponent extends FormBase implements OnInit {

    public formAgenda: FormGroup;

    constructor(private fb: FormBuilder, private agendaService: AgendaService) {
        super()
        const agendaFormGroup = new AgendaFormGroup(this.fb)
        this.formAgenda = agendaFormGroup.montarFormGroup();        
     }

    ngOnInit() {
    }

    salvar() {
        if (this.formAgenda.valid) {
            const agenda: Agenda = { ...this.formAgenda.value };
            agenda.diasAtendimentos = this.formAgenda.value.diasAtendimentos.map(this.filtrarDiasAtendimentoSelecionados).filter(dia => dia !== undefined);
            this.agendaService.save(agenda);
        }        
    }

    filtrarDiasAtendimentoSelecionados(dia, index) {
        if (dia === true) return { id: index + 1 }
    }

}

