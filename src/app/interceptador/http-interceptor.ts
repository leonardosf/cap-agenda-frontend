import { Injectable } from "@angular/core";
import { LoadingService } from "../servicos/loading.service";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptador implements HttpInterceptor {

    requestsAtivas:number = 0;

    constructor(private loadingService:LoadingService) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.requestsAtivas === 0) {
            this.loadingService.startLoading();
        }

        this.requestsAtivas++;
        return next.handle(request).pipe(
            finalize(() => {
                this.requestsAtivas--;
                if(this.requestsAtivas === 0) {
                    this.loadingService.stopLoading();
                }
            })
        )
    }
}