import { Component, ViewChild } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { OptionsInput } from "@fullcalendar/core";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { DialogService } from "src/app/componentes/dialog/service/dialog.service";
import { DialogDados } from "src/app/componentes/dialog/model/dialog.dados";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ConsultaModelo } from "src/app/modelos/agenda/consulta";

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html'
})
export class CalendarioComponent {



    options: OptionsInput;
    eventsModel = new Array<ConsultaModelo>();

    dados: DialogDados = {
        btnConfirmar: 'Fechar', 
        btnCancelar: 'Cancelar'
    };

    form:FormGroup;

    constructor(private dialog:DialogService){}


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
        let dadosAgenda = JSON.parse(sessionStorage.getItem('dadosAgenda'));
        let consultaModelo:ConsultaModelo;
        for(let consulta of dadosAgenda.consultas) {
            consultaModelo = new ConsultaModelo();
            consultaModelo.title = consulta.pessoa == undefined ? '' : consulta.pessoa.nome;
            consultaModelo.date = consulta.data+" "+consulta.horaInicio;
            consultaModelo.backgroundColor = consulta.title != undefined && consulta.title != '' ? 'red' : 'green';
            this.eventsModel.push(consultaModelo);
        }   
    }

    eventClick(model) {
        console.log(model);
        this.dados.titulo = `Dia/Hora ${new Date(model.event.start).toLocaleString()}`;
        this.dialog.visualizar(this.dados, '700px');
    }

    eventDragStop(model) {
        console.log(model);
    }

    dateClick(model) {
        console.log(model);
    }

}