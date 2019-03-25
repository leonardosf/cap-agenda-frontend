import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.scss']
})
export class AssociadoComponent implements OnInit {

  formAssociado:FormGroup;

  constructor(public fb:FormBuilder) {
    this.formAssociado = new FormGroup({
      nome: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return 'Campo obrigatório';
  }

}
