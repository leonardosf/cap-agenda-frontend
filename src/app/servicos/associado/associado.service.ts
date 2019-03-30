import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AssociadoService extends HttpService {

    path = "associados";

    setPath() {
        super.setPath(this.path);
    }
}