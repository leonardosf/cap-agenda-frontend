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

}