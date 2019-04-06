import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { EstadoCivilEnum } from 'src/app/enums/estadoCivilEnum';

@Component({
  selector: 'app-associado',
  templateUrl: './associado.component.html',
  styleUrls: ['./associado.component.scss']
})
export class AssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public fb: FormBuilder, public associadoService: AssociadoService) {}

  ngOnInit() {

    this.formAssociado = this.fb.group({
      nome: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      numeroRG: new FormControl('', Validators.required),
      dataEmissaoRG: new FormControl('', Validators.required),
      orgaoEmissor: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      estadoCivil: new FormGroup({
        id: new FormControl(''),
        descricao: new FormControl('', Validators.required)
      }),
      naturalidade: new FormControl('', Validators.required),
      nascionalidade: new FormControl('', Validators.required),
      nomeMae: new FormControl('', Validators.required),
      nomePai: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      endereco: new FormGroup({
        logradouro: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        cep: new FormControl('', Validators.required),
        uf: new FormControl('', Validators.required)

      }),
      telefones: this.fb.array([
        new FormGroup({
          numero: new FormControl('', Validators.required),
          tipoTelefone: new FormGroup({
            id: new FormControl(''),
            descricao: new FormControl('', Validators.required)
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
  }

  salvar() {
    const associadoModelo:AssociadoModelo = {...this.formAssociado.value};
    associadoModelo.estadoCivil.id = EstadoCivilEnum.getByDescCompleta(associadoModelo.estadoCivil.descricao).id;
    for(let dep of associadoModelo.dependentes) {
      if(dep.nome) {
        dep.endereco = associadoModelo.endereco;
      } else {
        delete associadoModelo.dependentes;
      }
    }
    this.associadoService.salvar(associadoModelo, (callback) => {
      console.log("cadastrado com sucesso!");
      alert("cadastrado com sucesso!");
    });
  }
}
