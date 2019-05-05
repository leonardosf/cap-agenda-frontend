import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { Utils } from 'src/app/utils/utils';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';
import { AssociadoFormGroup } from '../associado.form.group';

@Component({
  selector: 'cadastrar-associado',
  templateUrl: './cadastrar-associado.component.html',
  styleUrls: ['./cadastrar-associado.component.scss']
})
export class CadastrarAssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public fb: FormBuilder, public associadoService: AssociadoService) {}

  ngOnInit() {
    const associadoFormGroup = new AssociadoFormGroup(this.fb);
    this.formAssociado = associadoFormGroup.montarForGroup();
  }

  salvar() {
    this.associadoModelo = {...this.formAssociado.value};
    Utils.removerMascaras(this.associadoModelo);
    this.comporDependentes(this.associadoModelo);
    this.associadoService.salvar(this.associadoModelo);
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
