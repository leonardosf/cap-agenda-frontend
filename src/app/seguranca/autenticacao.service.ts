import { HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService implements OnInit {

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    public isAutenticado(): boolean {
        const autenticado = localStorage.getItem('autenticado');        
        return autenticado !== null;
    }

    public cloneRequest(request): HttpRequest<any> {
        const token = localStorage.getItem('token');
        if (token === undefined || token === null) return request;
        const cloneRequest = request.clone({
            headers: new HttpHeaders({
              'Authorization': token
            })
          });
        return cloneRequest;
    }

    public redirecionarLogin() {
        this.router.navigate(['/login']);
    }

    public limparStorage() {
        localStorage.clear();
    }

    public logout() {
        this.limparStorage();
        this.redirecionarLogin();
    }

    public autenticar(usuario: string, senha: string){

        const payload = new URLSearchParams();
        payload.set('username', usuario);
        payload.set('password', senha);
        payload.set('grant_type', environment.grantType);
        payload.set('scope', environment.scope);
        payload.set('client_secret', environment.secret);
        payload.set('client_id', environment.client);
  
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': environment.basic };
        this.http.post(environment.urlLogin, payload.toString(), { headers }).subscribe(
            resposta => {
                localStorage.setItem('autenticado', 'true');
                localStorage.setItem('token',  `${ resposta['token_type'] } ${ resposta['access_token'] }`);
                localStorage.setItem('refresh_token',  resposta['refresh_token']); 
                this.router.navigate(['/page']);
            }, 
            erro => {
                console.log(erro);
        });
    }




}