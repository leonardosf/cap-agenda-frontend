import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService extends HttpService {

    path = "funcionarios";

    setPath() {
        super.setPath(this.path);
    }
}