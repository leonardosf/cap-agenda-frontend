import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.scss']
})
export class AssociadoComponent implements OnInit {

  nome = new FormControl('', [Validators.required]);
  matricula = new FormControl();
  teste = new FormControl();
  teste2 = new FormControl();
  teste3 =new FormControl();

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.nome.hasError('required') ? 'Campo obrigatório' : '';
  }

}
