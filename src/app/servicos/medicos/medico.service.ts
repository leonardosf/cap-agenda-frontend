import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MedicoService extends HttpService {

    path = "medicos";

    setPath() {
        super.setPath(this.path);
    }
}