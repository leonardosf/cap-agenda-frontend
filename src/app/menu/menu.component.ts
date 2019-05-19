import { AutenticacaoService } from './../seguranca/autenticacao.service';
import { HttpService } from './../servicos/http.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { of } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public menus: Array<Menu> = [];
    public home = { nome: 'Home', icone: 'home' };
    public autenticado$ = of(false);

    constructor(private http: HttpService, private autenticacaoService: AutenticacaoService) {
        this.menus = [];
    }

    ngOnInit() {
        this.carregarMenu();
        this.autenticado$ = of(this.autenticacaoService.isAutenticado());
    }

    carregarMenu() {
        this.http.path = 'menus';
        this.http.recuperarTodos(resposta => { 
            this.menus = resposta;
            this.home = this.menus[0];
            this.menus.splice(0, 1);
        }, () => {
            this.menus = [];
        });
    }

    sair() {
        this.autenticacaoService.logout();
        this.autenticado$ = of(false);
        this.menus = [];
    }

}