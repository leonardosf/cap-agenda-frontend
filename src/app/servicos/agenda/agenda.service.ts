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
    
}