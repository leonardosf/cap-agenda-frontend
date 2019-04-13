import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';

@Component({
  selector: 'editar-associado',
  templateUrl: './editar-associado.component.html',
  styleUrls: ['./editar-associado.component.scss']
})
export class EditarAssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location,
      public associadoService:AssociadoService){

    this.router.queryParams.subscribe(parametro => {this.associadoModelo = JSON.parse(parametro['associado'])});
    this.formAssociado = Utils.montarForGroupAssociado(this.fb);

    this.formAssociado.patchValue(this.associadoModelo);
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }

  atualizar() {
    const associadoModelo:AssociadoModelo = {...this.formAssociado.value};
    this.removerCarateresEspeciais(this.associadoModelo)
    for(let dep of associadoModelo.dependentes) {
      if(dep.nome) {
        dep.endereco = associadoModelo.endereco;
        dep.matricula = associadoModelo.matricula;
        dep.estadoCivil = associadoModelo.estadoCivil;
        dep.telefones = associadoModelo.telefones;
        dep.tipoParentesco.id = TipoParentescoEnum.getByDescCompleta(dep.tipoParentesco.descricao.toUpperCase()).codigo;
      } else {
        delete associadoModelo.dependentes;
      }
    }
    this.associadoService.atualizar(associadoModelo, 
      (callback) => {
        alert("Associado atualizado com sucesso!");
      });
  }

  removerCarateresEspeciais(associadoModelo: AssociadoModelo): any {
    associadoModelo.cpf = Utils.somenteNumeros(associadoModelo.cpf);
    associadoModelo.numeroRG = Utils.somenteNumeros(associadoModelo.numeroRG);
    associadoModelo.endereco.cep = Utils.somenteNumeros(associadoModelo.endereco.cep);

    if(associadoModelo.telefones.length > 0) {
      for(let tel of associadoModelo.telefones) {
        tel.numero = Utils.somenteNumeros(tel.numero);
      }
    }
  }


}
