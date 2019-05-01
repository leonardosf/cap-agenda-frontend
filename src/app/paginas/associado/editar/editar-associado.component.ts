import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';
import { AssociadoFormGroup } from '../associado.form.group';

@Component({
  selector: 'editar-associado',
  templateUrl: './editar-associado.component.html',
  styleUrls: ['./editar-associado.component.scss']
})
export class EditarAssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;
  id;

  constructor(private router: ActivatedRoute, public fb: FormBuilder, private location: Location,
    private http:AssociadoService) {

    const associadoFormGroup = new AssociadoFormGroup(this.fb);
    this.formAssociado = associadoFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
          this.formAssociado.patchValue(resposta);
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  atualizar() {
    this.associadoModelo = {...this.formAssociado.value};
    this.removerCarateresEspeciais(this.associadoModelo)
    this.comporDependentes(this.associadoModelo);
    this.http.atualizar(this.associadoModelo);
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

  removerCarateresEspeciais(associadoModelo: AssociadoModelo): any {
    associadoModelo.cpf = Utils.somenteNumeros(associadoModelo.cpf.toString());
    associadoModelo.numeroRG = Utils.somenteNumeros(associadoModelo.numeroRG.toString());
    associadoModelo.endereco.cep = Utils.somenteNumeros(associadoModelo.endereco.cep.toString());

    if(associadoModelo.telefones.length > 0) {
      for(let tel of associadoModelo.telefones) {
        tel.numero = Utils.somenteNumeros(tel.numero.toString());
      }
    }
  }


}
