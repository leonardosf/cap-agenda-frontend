import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DiasAtendimentoService extends HttpService {

    path = 'dias-atendimentos';

    setPath() {
        super.setPath(this.path);
    }
}