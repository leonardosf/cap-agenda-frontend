import { ConsultaService } from './../../servicos/consulta/consulta.service';
import { HttpService } from './../../servicos/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public totaisConsultas = [];

    constructor(private httpService: ConsultaService){}

    ngOnInit(): void {
        this.httpService.totalConsultasAgendadasDia(resposta => {
            this.totaisConsultas = resposta;
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            this.totaisConsultas.push({especialidade: "Clinica Médica 2", total: 10});
            console.log(this.totaisConsultas);
        }, () => {

        })
    }
}