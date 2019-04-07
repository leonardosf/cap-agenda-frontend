import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utils } from "../utils/utils";

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

    recuperar(id, callback) {
        this.http.get(this.resource + this.path +"/"+id).pipe().subscribe(
            (retorno) => {
                return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    atualizar(modelo, callback) {
        this.http.put(this.resource + this.path, modelo).pipe().subscribe(
            (retorno) => {
                return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoTelefone(callback) {
        this.http.get(this.resource + 'tipos-telefones').pipe().subscribe(
            (retorno) => {
                return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoParentescos(callback) {
        this.http.get(this.resource + 'tipos-parentescos').pipe().subscribe(
            (retorno) => {
                return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    pesquisarAssociado(callback) {
        this.http.get(this.resource + this.path).pipe().subscribe(
            (retorno) => {
                return callback(retorno)
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });

    }
}