import { Agenda } from './../../modelos/agenda/agenda';
import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AgendaService extends HttpService {

    path = "agendas";

    setPath() {
        super.setPath(this.path);
    }

    save(agenda: Agenda) {
        this.http.post(`${this.resource}${this.path}`, agenda).subscribe(
            () => {
                this.mensagem.mostrar("Cadastrado com sucesso!", "OK");
            }, erro => {
                console.log('ERRO SALVAR AGENDA', erro.error.mensagem);
                this.mensagem.mostrar(erro.error.mensagem, "OK");
            }
        );
    }

    update(agenda: Agenda) {
        this.http.put(`${this.resource}${this.path}`, agenda).subscribe(
            () => {
                this.mensagem.mostrar("Atualizado com sucesso!", "OK");
            }, erro => {
                console.log('ERRO EDITAR AGENDA', erro.error.mensagem);
                this.mensagem.mostrar(erro.error.mensagem, "OK");
            }
        );
    }
    
}