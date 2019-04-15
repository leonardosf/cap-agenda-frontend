import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConsultorioService extends HttpService {

    path = "consultorios";

    setPath() {
        super.setPath(this.path);
    }
}