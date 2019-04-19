import { ConsultorioService } from './../../../servicos/consultorios/consultorio.service';
import { MedicoService } from './../../../servicos/medicos/medico.service';
import { FormBase } from './../form.base';
import { Component, Input, OnInit } from "@angular/core";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { DiasAtendimentoService } from 'src/app/servicos/dias-atendimento/dias-atendimento.service';
import { MatCheckbox } from '@angular/material';
import { DiaAtendimento } from 'src/app/modelos/dias-atendimentos/dias-atendimentos';

@Component({
    selector: 'form-agenda',
    templateUrl: './form-agenda.component.html',
    styleUrls: ['./form-agenda.component.scss']
})
export class FormAgendaComponent extends FormBase implements OnInit {

    @Input()
    public formAgenda: FormGroup;
    public tempoAtendimentos = [20, 30, 40, 50, 60];
    public diasSemanas = [];
    public dias = [];
    public medicos = [];
    public consultorios = [];
    public possuiIntervalo = false

    constructor(private medicoService: MedicoService,
                private diasAtendimentosService: DiasAtendimentoService,
                private consultorioService: ConsultorioService) {
        super();        
    }

    ngOnInit() {        
        this.carregarDiasAtendimentos();
        this.carregarMedicos();
        this.carregarConsultorios();
    }

    private carregarDiasAtendimentos() {
        this.diasAtendimentosService.recuperarTodos(response => {
            this.diasSemanas = response;
            this.diasSemanas.map((o, i) => {
                const control = new FormControl(); // if first item set to true, else false
                (this.formAgenda.controls.diasAtendimentos as FormArray).push(control);
              });
        }, () => {
        });
    }

    private carregarConsultorios() {
        this.consultorioService.recuperarPaginada({ limite: 1000 }, response => {
            this.consultorios = response.conteudo;
        }, () => {
        });
    }

    private carregarMedicos() {
        this.medicoService.recuperarPaginada({ limite: 1000 }, response => {
            this.medicos = response.conteudo;
        }, () => {
        });
    }

    checkboxChange(checked: boolean) {
        this.possuiIntervalo = checked
        this.adicionarRemoverFormValidadorIntervalo()
    }

    private adicionarRemoverFormValidadorIntervalo() {
        if (this.possuiIntervalo) {
            this.formAgenda.controls.horaInicioIntervalo = new FormControl('', Validators.required);
            this.formAgenda.controls.horaFimIntervalo = new FormControl('', Validators.required);
        } else {
            delete this.formAgenda.controls.horaInicioIntervalo;
            delete this.formAgenda.controls.horaFimIntervalo;
        }
        this.formAgenda.updateValueAndValidity()        
    }
   
}