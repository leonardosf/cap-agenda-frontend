import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';

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
    // associadoModelo.estadoCivil.id = EstadoCivilEnum.getByDescCompleta(associadoModelo.estadoCivil.descricao).id;
    for(let dep of associadoModelo.dependentes) {
      if(dep.nome) {
        dep.endereco = associadoModelo.endereco;
      } else {
        delete associadoModelo.dependentes;
      }
    }
    this.associadoService.atualizar(associadoModelo, 
      (callback) => {
        alert("Associado atualizado com sucesso!");
      });

  }


}
