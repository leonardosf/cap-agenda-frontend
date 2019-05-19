import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utils } from "../utils/utils";
import { MensagemToast } from "../componentes/mensagens/mensagem-toast";
import { AssociadoModelo } from "../modelos/associado/associadoModelo";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    resource = environment.url;
    path;

    constructor(protected http: HttpClient, protected mensagem:MensagemToast) {

    }

    setPath(path) {
        this.path = path;
    }

    salvar(modelo) {
        this.http.post(this.resource + this.path, modelo).subscribe(
            () => {
                this.mensagem.mostrar("Cadastrado com sucesso!", "OK");
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("ERRROOOOR = " + erro);
            });
    }

    recuperarTodos(callBackSucesso, callbackErro) {
        this.http.get(`${this.resource}${this.path}`).subscribe(response => {
            callBackSucesso(response);
        }, error => {
            console.log('ERRO HTTP', error);
            callbackErro();
        });
    }

    recuperar(id, callback) {
        this.http.get(this.resource + this.path +"/"+id).pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("EERRRROOO = " + erro);
            });
    }

    recuperarPaginada(parametros, callBackSucesso, callBackErro) {
        this.http.get(`${this.resource}${this.path}`, { params:Utils.montarParametros(parametros) }).pipe().subscribe( response => {
            callBackSucesso(response);
        }, error => {
            console.log('ERRO HTTP', error);
            callBackErro();
        });
    }

    atualizar(modelo) {
        this.http.put(this.resource + this.path, modelo).pipe().subscribe(
            () => {
                this.mensagem.mostrar("Atualizado com sucesso!", "OK");
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("EERRRROOO = " + erro);
            });
    }

    remover(id, callback) {
        this.http.delete(this.resource + this.path +"/"+id).pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoTelefone(callback) {
        this.http.get(this.resource + 'tipos-telefones').pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("EERRRROOO = " + erro);
            });
    }

    obterTipoParentescos(callback) {
        this.http.get(this.resource + 'tipos-parentescos').pipe().subscribe(
            (retorno) => {
                return callback(retorno);
            }, (erro) => {
                this.mensagem.mostrar("Erro na requisição", erro.statusText);
                console.log("EERRRROOO = " + erro);
            });
    }
}