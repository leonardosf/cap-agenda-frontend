import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utils } from "../utils/utils";
import { MensagemToast } from "../componentes/mensagens/mensagem-toast";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    resource = "http://localhost:8080/cap-agenda/api/";
    path;

    constructor(private http: HttpClient, private mensagem:MensagemToast) {

    }

    setPath(path) {
        this.path = path;
    }

    salvar(modelo) {
        this.http.post(this.resource + this.path, modelo).subscribe(
            () => {
                this.mensagem.sucesso("Cadastrado com sucesso!", "OK");
            }, (erro) => {
                console.log("ERRROOOOR = " + erro);
            });
    }

    recuperar(id, callback) {
        this.http.get(this.resource + this.path +"/"+id).pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    atualizar(modelo) {
        this.http.put(this.resource + this.path, modelo).pipe().subscribe(
            () => {
                this.mensagem.sucesso("Atualizado com sucesso!", "OK");
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    remover(id, callback) {
        this.http.delete(this.resource + this.path +"/"+id).pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoTelefone(callback) {
        this.http.get(this.resource + 'tipos-telefones').pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoParentescos(callback) {
        this.http.get(this.resource + 'tipos-parentescos').pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });
    }

    pesquisarAssociado(callback) {
        this.http.get(this.resource + this.path).pipe().subscribe(
            (retorno:any) => {
                return callback(retorno.conteudo);
            }, (erro) => {
                console.log("EERRRROOO = " + erro);
            });

    }
}