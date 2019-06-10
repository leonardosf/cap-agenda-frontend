import { Component, ViewChild } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { OptionsInput } from "@fullcalendar/core";
import { DialogService } from "src/app/componentes/dialog/service/dialog.service";
import { DialogDados } from "src/app/componentes/dialog/model/dialog.dados";
import { FormGroup } from "@angular/forms";
import { ConsultaModelo } from "src/app/modelos/agenda/consultaModelo";
import { ConsultaService } from "src/app/servicos/consulta/consulta.service";
import { ConsultaDTO } from "src/app/modelos/agenda/ConsultaDTO";
import { FullCalendarComponent } from "@fullcalendar/angular";
import EventSourceApi from "@fullcalendar/core/api/EventSourceApi";

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html'
})
export class CalendarioComponent {

    options: OptionsInput;
    eventsModel = new Array<any>();

    form:FormGroup;
    consultaDTO = new ConsultaDTO();
    consultas;
    idAgenda;

    @ViewChild('fullcalendar') calendario:FullCalendarComponent;

    constructor(private dialog:DialogService, private consultaService:ConsultaService){}

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
        this.comporAgenda();
    }

    private comporAgenda() {
        let dadosAgenda = JSON.parse(sessionStorage.getItem('dadosAgenda'));
        this.consultas = dadosAgenda.consultas;
        this.idAgenda = dadosAgenda.id;
        let consultaModelo: any;
        for (let consulta of dadosAgenda.consultas) {
            if(consulta.situacao != 'CANCELADA_PACIENTE') {
                consultaModelo = new ConsultaModelo();
                consultaModelo.id = consulta.id;
                consultaModelo.title = consulta.pessoa == undefined ? '' : consulta.pessoa.nome;
                consultaModelo.date = consulta.data + " " + consulta.horaInicio;
                consultaModelo.backgroundColor = consultaModelo.title != undefined && consultaModelo.title != '' ? 'red' : 'green';
                this.eventsModel.push(consultaModelo);
            }
        }
    }

    eventClick(model) {

        let dadosDialog:DialogDados;

        if(model.event.title == undefined || model.event.title == "") {
            dadosDialog = {
                btnConfirmar: 'Confirmar', 
                btnCancelar: 'Cancelar',
                acaoConfirmar: () => {
                    this.consultaDTO = this.consultas.filter(consulta => consulta.id == model.event.id);
                    this.consultaDTO[0].pessoa = dadosDialog.dados.paciente[0];
                    this.consultaDTO[0].situacao = 'AGENDADA';
                    this.consultaService.atualizar(this.consultaDTO[0], 
                        (callback) => {
                            let index = this.consultas.findIndex((item) => item.id == callback.id)
                            this.consultas[index] = callback;
                            this.addEvent(callback.id, this.consultas);
                        });
                }, 
            };
        } else {
            dadosDialog = {
                btnDesmarcar: 'Desmarcar',
                btnCancelar: 'Cancelar', 
                acaoDesmarcar: () => {
                    this.consultaDTO = this.consultas.filter(consulta => consulta.id == model.event.id);
                    this.consultaDTO[0].pessoa = null;
                    this.consultaDTO[0].situacao = 'CANCELADA_PACIENTE';
                    this.consultaDTO[0].dataHoraCancelamento = new Date().toISOString();
                    this.consultaService.atualizar(this.consultaDTO[0], 
                        (callback) => {
                            let index = this.consultas.findIndex((item) => item.id == this.consultaDTO[0].id)
                            callback.id = this.consultaDTO[0].id;
                            this.consultas[index] = callback;
                            this.removerEvent(callback.id);
                        });
                }, 
            };
        }
    
        let dados = {dia:new Date(model.event.start).toLocaleString().split(" ")[0],
                    hora:new Date(model.event.start).toLocaleString().split(" ")[1],
                    nome: model.event.title};
        dadosDialog.dados = dados;
        this.dialog.visualizar(dadosDialog, '500px');
    }

    eventDragStop(model) {
        console.log(model);
    }

    dateClick(model) {
        console.log(model);
    }

    addEvent(id, consultas) {
        let consulta = consultas.filter(con => con.id == id);
        let event:any = this.eventsModel.filter(event => event.id == id)
        event[0].backgroundColor = 'red'
        event[0].title = consulta[0].pessoa.nome;

        let calendar = this.calendario.getApi()
        let sources:EventSourceApi[] = calendar.getEventSources();
        sources[0].refetch();
    }
    
    removerEvent(id) {
        let event:any = this.eventsModel.filter(event => event.id == id)
        event[0].backgroundColor = 'green'
        event[0].title = '';

        let calendar = this.calendario.getApi()
        let sources:EventSourceApi[] = calendar.getEventSources();
        sources[0].refetch();
    }

}