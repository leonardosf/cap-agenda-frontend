import { HttpService } from './../servicos/http.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public menus: Array<Menu> = [];
    public home = { nome: 'Home', icone: 'home' };

    constructor(private http: HttpService) {
        this.menus = [];
    }

    ngOnInit() {
        this.http.path = 'menus';
        this.http.recuperarTodos(resposta => { 
            this.menus = resposta;
            this.home = this.menus[0];
            this.menus.splice(0, 1);
        }, erro => this.menus = []);
    }

    sucesso(resposta) {
        this.menus = resposta;
        
    }

    erro(error) {
        this.menus = [];
    }

}