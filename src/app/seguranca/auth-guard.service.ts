
import { AutenticacaoService } from './autenticacao.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate  } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    
    constructor(
        private router: Router,
        private autenticacaoService: AutenticacaoService
    ) { }

    canActivate(): boolean {
        if (!this.autenticacaoService.isAutenticado()) {
            this.autenticacaoService.redirecionarLogin();
            return false;
        }
        return true;
    }

    
}