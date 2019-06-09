import { Component } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { OptionsInput } from "@fullcalendar/core";
import { DialogService } from "src/app/componentes/dialog/service/dialog.service";
import { DialogDados } from "src/app/componentes/dialog/model/dialog.dados";
import { FormGroup } from "@angular/forms";
import { ConsultaModelo } from "src/app/modelos/agenda/consultaModelo";
import { ConsultaService } from "src/app/servicos/consulta/consulta.service";
import { ConsultaDTO } from "src/app/modelos/agenda/ConsultaDTO";
import { ActivatedRoute } from "@angular/router";
import { AgendaService } from "src/app/servicos/agenda/agenda.service";
import { Agenda } from "src/app/modelos/agenda/agenda";

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html'
})
export class CalendarioComponent {



    options: OptionsInput;
    eventsModel = new Array<ConsultaModelo>();

    form:FormGroup;
    agenda;
    consultaDTO = new ConsultaDTO();

    constructor(private dialog:DialogService, private consultaService:ConsultaService,
        private route:ActivatedRoute, private agendaService:AgendaService){}


    ngOnInit() {
        this.options = {
            editable: true,
            buttonText: {
                prev: 'anterior',
                next: 'próximo',
                today: 'hoje',
                month: 'Mês'
            },
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth'
            },
            locale:'ptBr',
            plugins: [dayGridPlugin, interactionPlugin]
        };
        this.comporAgenda()
    }

    private comporAgenda() {
        let id;
        this.route.queryParams.subscribe(params => id = params.id);
        this.recuperar(id);
    }

    recuperar(id) {
        this.agendaService.recuperar(id,
            (callback) => {
                this.agenda = callback;
                let consultaModelo: ConsultaModelo;
                for (let consulta of this.agenda.consultas) {
                    consultaModelo = new ConsultaModelo();
                    consultaModelo.id = consulta.id;
                    consultaModelo.title = consulta.pessoa == undefined ? '' : consulta.pessoa.nome;
                    consultaModelo.date = consulta.data + " " + consulta.horaInicio;
                    consultaModelo.backgroundColor = consultaModelo.title != undefined && consultaModelo.title != '' ? 'red' : 'green';
                    this.eventsModel.push(consultaModelo);
                }
            })
    }
    

    eventClick(model) {
        this.consultaDTO = this.agenda.consultas.filter(consulta => consulta.id == model.event.id);

        let dadosDialog:DialogDados;
        
        if(model.title == undefined) {
            dadosDialog = {
                btnConfirmar: 'Confirmar', 
                btnCancelar: 'Cancelar',
                acaoConfirmar: () => {
                    this.consultaDTO[0].pessoa = dadosDialog.dados.paciente[0];
                    this.consultaDTO[0].situacao = 'AGENDADA';
                    this.consultaService.atualizar(this.consultaDTO[0], 
                        (callback) => {
                            this.recuperar(callback.agenda.id);
                        });
                }, 
            };
        } else {
            dadosDialog = {
                btnDesmarcar: 'Desmarcar',
                btnCancelar: 'Cancelar', 
                acaoDesmarcar: () => {
                    this.consultaDTO[0].pessoa = null;
                    this.consultaDTO[0].situacao = 'CRIADA';
                    this.consultaService.atualizar(this.consultaDTO[0], 
                        (callback) => {
                            this.recuperar(callback.agenda.id);
                        });
                }, 
            };
        }
    
        let dados = {dia:new Date(model.event.start).toLocaleString().split(" ")[0],
                    hora:new Date(model.event.start).toLocaleString().split(" ")[1]};
        dadosDialog.dados = dados;
        this.dialog.visualizar(dadosDialog, '500px');
    }

    eventDragStop(model) {
        console.log(model);
    }

    dateClick(model) {
        console.log(model);
    }

}