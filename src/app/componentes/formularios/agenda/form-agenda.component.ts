import { validadorHora, ValidadorHora } from './../../../paginas/agenda/agenda.form.group';
import { ConsultorioService } from './../../../servicos/consultorios/consultorio.service';
import { MedicoService } from './../../../servicos/medicos/medico.service';
import { FormBase } from './../form.base';
import { Component, Input, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { DiasAtendimentoService } from 'src/app/servicos/dias-atendimento/dias-atendimento.service';

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
                private consultorioService: ConsultorioService,
                private cdref: ChangeDetectorRef) {
        super();        
    }

    ngOnInit() {        
        this.carregarDiasAtendimentos();
        this.carregarMedicos();
        this.carregarConsultorios();

        this.formAgenda.controls.possuiIntervalo.valueChanges.subscribe(
            selectedValue => {
                this.possuiIntervalo = selectedValue;  
                this.adicionarRemoverFormValidadorIntervalo(); 
                this.removerValoresIntervalo();
                this.cdref.detectChanges();
            }
        );
    }

    private carregarDiasAtendimentos() {
        this.diasAtendimentosService.recuperarTodos(response => {
            this.diasSemanas = response;
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

    private adicionarRemoverFormValidadorIntervalo() {
        if (this.possuiIntervalo) {
            this.formAgenda.controls.horaInicioIntervalo.setValidators([ Validators.required, ValidadorHora ]);
            this.formAgenda.controls.horaFimIntervalo.setValidators([ Validators.required, ValidadorHora ]);
        } else {
            this.formAgenda.controls.horaInicioIntervalo.setValidators(null);
            this.formAgenda.controls.horaFimIntervalo.setValidators(null);
        }
        this.formAgenda.updateValueAndValidity();       
    }

    private removerValoresIntervalo() {
        if (!this.possuiIntervalo) {
            this.formAgenda.controls.horaInicioIntervalo.setValue(null);
            this.formAgenda.controls.horaFimIntervalo.setValue(null);
        } 
        this.formAgenda.updateValueAndValidity(); 
    }
   
}