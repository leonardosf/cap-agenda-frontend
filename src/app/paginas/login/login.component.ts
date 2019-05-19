import { MenuComponent } from './../../menu/menu.component';
import { Menu } from './../../menu/menu';
import { AutenticacaoService } from './../../seguranca/autenticacao.service';
import { FormBase } from './../../componentes/formularios/form.base';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBase {

    formLogin: FormGroup;
    @Output()
    customEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder, private autenticacaoService: AutenticacaoService, private router: Router) {
        super();
        this.formLogin = this.criarFormGroup();
    }

    ngAfterViewInit() {
    }

    private criarFormGroup(): FormGroup {
        return this.fb.group({
            login: new FormControl('dev', Validators.required),
            senha: new FormControl('123', Validators.required)
        });
    }

    logar() {
        this.autenticacaoService.autenticar(this.formLogin.controls.login.value, this.formLogin.controls.senha.value);
    }    

}