import { AutenticacaoService } from './../seguranca/autenticacao.service';
import { HttpService } from './../servicos/http.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public menus: Array<Menu> = [];
    public menusFixos = new Array<any>();
    snav:boolean = true;
    watcher: Subscription;

    constructor(private http: HttpService, private autenticacaoService: AutenticacaoService,
        public mediaObserver: MediaObserver) {
            this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
                if (change.mqAlias == 'xs') {
                    this.snav = false;
                } else {
                    this.snav = true;
                }
            });
        }

    ngOnInit() {
        this.carregarMenu();
    }

    toggle() {
        this.snav = !this.snav;
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