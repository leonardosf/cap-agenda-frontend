import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'visualizar-medico',
  templateUrl: './visualizar-medico.component.html',
  styleUrls: ['./visualizar-medico.component.scss']
})
export class VisualizarMedicoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location){
    this.router.queryParams.subscribe(parametro => {this.associadoModelo = JSON.parse(parametro['associado'])});
    this.formAssociado = this.fb.group({

      nome: new FormControl(''),
      matricula: new FormControl(''),
      cpf: new FormControl(''),
      numeroRG: new FormControl(''),
      dataEmissaoRG: new FormControl(''),
      orgaoEmissor: new FormControl(''),
      dataNascimento: new FormControl(''),
      email: new FormControl(''),
      estadoCivil: new FormGroup({
        id: new FormControl(''),
        descricao: new FormControl('')
      }),
      naturalidade: new FormControl(''),
      nascionalidade: new FormControl(''),
      nomeMae: new FormControl(''),
      nomePai: new FormControl(''),
      sexo: new FormControl(''),
      endereco: new FormGroup({
        logradouro: new FormControl(''),
        numero: new FormControl(''),
        complemento: new FormControl(''),
        bairro: new FormControl(''),
        cidade: new FormControl(''),
        cep: new FormControl(''),
        uf: new FormControl('')

      }),
      telefones: this.fb.array([
        new FormGroup({
          numero: new FormControl(''),
          tipoTelefone: new FormGroup({
            id: new FormControl(''),
            descricao: new FormControl('')
          })
        }),
      ]),
      dependentes: this.fb.array([
        new FormGroup({
          nome: new FormControl(''),
          matricula: new FormControl(''),
          cpf: new FormControl(''),
          numeroRg: new FormControl(''),
          dataEmissaoRg: new FormControl(''),
          orgaoEmissor: new FormControl(''),
          dataNascimento: new FormControl(''),
          sexo: new FormControl(''),
          tipoParentesco: new FormGroup({
            id: new FormControl(''),
            descricao: new FormControl('')
          })
        })
      ])
    })

    this.formAssociado.patchValue(this.associadoModelo);
    this.formAssociado.disable();
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }


}
