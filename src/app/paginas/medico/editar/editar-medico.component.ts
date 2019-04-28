import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';

@Component({
  selector: 'editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit {

  formMedico: FormGroup;
  medicoModelo:MedicoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location,
      public associadoService:AssociadoService){

    this.router.queryParams.subscribe(parametro => {this.medicoModelo = JSON.parse(parametro['associado'])});

    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formMedico = medicoFormGroup.montarForGroup();
    this.formMedico.patchValue(this.medicoModelo);
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }

  atualizar() {
    this.medicoModelo = {...this.formMedico.value};
    Utils.removerCarateresEspeciais(this.medicoModelo)
    this.associadoService.atualizar(this.medicoModelo);
  }

  comporDependentes(associadoModelo: AssociadoModelo): any {
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
  }

}
