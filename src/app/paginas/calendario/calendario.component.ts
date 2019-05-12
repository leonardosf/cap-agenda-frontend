import { Component, ViewChild } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { OptionsInput } from "@fullcalendar/core";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { DialogService } from "src/app/componentes/dialog/service/dialog.service";
import { DialogDados } from "src/app/componentes/dialog/model/dialog.dados";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html'
})
export class CalendarioComponent {



    options: OptionsInput;
    eventsModel: any = [{ title: 'Leonardo', date: '2019-05-01 08:00', backgroundColor: 'red' },
                        { title: 'João', date: '2019-05-01 08:30', backgroundColor: 'red'},
                        { title: 'Disponível', date: '2019-05-01 09:00', backgroundColor: 'green'},
                        { title: 'Jose', date: '2019-05-01 09:30', backgroundColor: 'red' },
                        { title: 'Francisco', date: '2019-05-01 10:00', backgroundColor: 'red' },
                        { title: 'Diego', date: '2019-05-01 10:30', backgroundColor: 'red' },
                        { title: 'Chico', date: '2019-05-01 11:00', backgroundColor: 'red' },
                        { title: 'Fernando', date: '2019-05-02 11:00', backgroundColor: 'red' },
                        { title: 'Gustavo', date: '2019-05-02 11:30', backgroundColor: 'red' },
                        { title: 'Gustavo', date: '2019-05-02 11:30', backgroundColor: 'red' },
                        { title: 'Disponível', date: '2019-05-02 11:30', backgroundColor: 'green' }
                        ];

    dados: DialogDados = {
        btnConfirmar: 'Fechar', 
        btnCancelar: 'Cancelar'
    };

    form:FormGroup;

    @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;


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