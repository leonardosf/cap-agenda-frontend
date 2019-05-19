import { AutenticacaoService } from './../seguranca/autenticacao.service';
import { Injectable } from "@angular/core";
import { LoadingService } from "../servicos/loading.service";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { finalize, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpInterceptador implements HttpInterceptor {

    requestsAtivas:number = 0;

    constructor(private loadingService: LoadingService, private autenticacaoService: AutenticacaoService) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneRequest = this.autenticacaoService.cloneRequest(request);

        if(this.requestsAtivas === 0) {
            this.loadingService.startLoading();
        }

        this.requestsAtivas++;
        return next.handle(cloneRequest).pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>err).status) {
                        case 401:
                            this.autenticacaoService.redirecionarLogin();
                            this.autenticacaoService.limparStorage();
                        case 400:
                        return throwError(err);
                    }
                    return throwError(err);
                } else {
                    return throwError(err);
                }
            }),
            finalize(() => {
                this.requestsAtivas--;
                if(this.requestsAtivas === 0) {
                    this.loadingService.stopLoading();
                }
            })
        );
    }
}