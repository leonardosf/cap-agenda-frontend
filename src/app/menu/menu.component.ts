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
    public menusFixos = new Array<any>();

    constructor(private http: HttpService, private autenticacaoService: AutenticacaoService) {
           
        }

    ngOnInit() {
        this.carregarMenu();
    }

    carregarMenu() {
        this.http.path = 'menus';
        this.http.recuperarTodos(resposta => { 
            this.menus = resposta;
            this.menusFixos.push(this.menus[0]);
            this.menusFixos.push(this.menus[1]);
            this.menus.splice(0, 2);
        }, () => {
            this.menus = [];
        });
    }

    sair() {
        this.autenticacaoService.logout();
        this.menus = [];
    }

}