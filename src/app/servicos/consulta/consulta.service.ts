import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/servicos/http.service';

@Injectable({
    providedIn: 'root'
})
export class ConsultaService extends HttpService {

    path = "consultas";

    setPath() {
        super.setPath(this.path);
    }

    totalConsultasAgendadasDia(callBackSucesso, callbackErro) {
        this.http.get(`${this.resource}${this.path}/total-dia`).subscribe(response => {
            callBackSucesso(response);
        }, error => {
            console.log('ERRO HTTP', error);
            callbackErro();
        });
    }

}