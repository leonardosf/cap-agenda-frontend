import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    resource = "http://localhost:8080/cap-agenda/api/";
    path;

    constructor(private http: HttpClient) {

    }

    setPath(path) {
        this.path = path;
    }

    salvar(modelo, callback, loading?) {
        this.http.post(this.resource + this.path, modelo).subscribe(
            (retorno) => {
                callback(retorno);
            }, (erro) => {
                console.log("ERRROOOOR = " + erro);
            });
    }

    obterTipoTelefone(callback) {
        this.http.get(this.resource + 'tipos-telefones').pipe().subscribe(
            (retorno) => {
               return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = "+erro);
            });
    }
}