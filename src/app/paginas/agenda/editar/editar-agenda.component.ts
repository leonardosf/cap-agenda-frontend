import { ActivatedRoute } from '@angular/router';
import { Agenda } from '../../../modelos/agenda/agenda';
import { AgendaService } from '../../../servicos/agenda/agenda.service';
import { AgendaFormGroup } from '../agenda.form.group';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormBase } from '../../../componentes/formularios/form.base';
import { Utils } from 'src/app/utils/utils';


@Component({
    selector: 'app-edt-agenda',
    templateUrl: './editar-agenda.component.html',
    styleUrls: ['./editar-agenda.component.css']
})
export class EditarAgendaComponent extends FormBase implements OnInit {

    public formAgenda: FormGroup;
    private id: number = 0;

    constructor(private fb: FormBuilder, private agendaService: AgendaService, private router: ActivatedRoute) {
        super()
        const agendaFormGroup = new AgendaFormGroup(this.fb)
        this.formAgenda = agendaFormGroup.montarFormGroup();   
        
        this.router.paramMap.subscribe(params => {
            this.id = Number(params.get("id"));
            this.agendaService.recuperar(this.id, resposta => {
                resposta.diasAtendimentos = this.prencherDiasAtendimentos(resposta.diasAtendimentos)
                resposta.possuiIntervalo = this.preencherPossuiIntervalo(resposta);    
                this.formAgenda.patchValue(resposta);
            });
        })  
     }

    ngOnInit() {
    }

     private prencherDiasAtendimentos(diasAtendimentos): Array<boolean> {
        const dias = [false, false, false, false, false, false, false];
        for (const dia of diasAtendimentos) {
            dias[dia.id - 1] = true;
        }
        return dias;
     }

    private preencherPossuiIntervalo(agenda: Agenda): boolean {
        return Utils.isNull(agenda.horaFimIntervalo) && Utils.isNull(agenda.horaFimIntervalo);
    }

    salvar() {
        if (this.formAgenda.valid) {
            const agenda: Agenda = { ...this.formAgenda.value };
            agenda.id = this.id;
            agenda.diasAtendimentos = this.formAgenda.value.diasAtendimentos.map(this.filtrarDiasAtendimentoSelecionados).filter(dia => dia !== undefined);
            this.agendaService.update(agenda);
        }        
    }

    filtrarDiasAtendimentoSelecionados(dia, index) {
        if (dia === true) return { id: index + 1 }
    }

}

