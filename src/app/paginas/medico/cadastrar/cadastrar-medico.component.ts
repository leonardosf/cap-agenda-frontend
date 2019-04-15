import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { Utils } from 'src/app/utils/utils';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';

@Component({
  selector: 'cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.scss']
})
export class CadastrarMedicoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public fb: FormBuilder, public associadoService: AssociadoService) {}

  ngOnInit() {

    this.formAssociado = Utils.montarForGroupAssociado(this.fb);
  }

  salvar() {
    this.associadoModelo = {...this.formAssociado.value};
    this.removerCarateresEspeciais(this.associadoModelo);
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
