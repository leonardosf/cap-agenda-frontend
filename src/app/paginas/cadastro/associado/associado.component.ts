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
      numeroRg: new FormControl('', Validators.required),
      dataEmissaoRg: new FormControl('', Validators.required),
      orgaoEmissor: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      estadoCivil: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      naturalidade: new FormControl(''),
      nascionalidade: new FormControl(''),
      nomeMae: new FormControl(''),
      nomePai: new FormControl(''),
      formEndereco: new FormGroup({
        logradouro:new FormControl(''),
        numero:new FormControl(''),
        complemento:new FormControl(''),
        bairro:new FormControl(''),
        cidade:new FormControl(''),
        cep:new FormControl(''),
        uf:new FormControl('')

      }),
      formTelefones: new FormGroup({
        numero:new FormControl(''),
        formTipoTelefone: new FormGroup({
          descricao:new FormControl(''),
        })
      })
    })
  }

  ngOnInit() {
  }
  
  salvar() {
    debugger;
  }
}
