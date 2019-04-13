import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { Utils } from 'src/app/utils/utils';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';

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

    this.formAssociado = Utils.montarForGroupAssociado(this.fb);
  }

  salvar() {
    this.associadoModelo = {...this.formAssociado.value};
    this.removerCarateresEspeciais(this.associadoModelo)
    for(let dep of this.associadoModelo.dependentes) {
      if(dep.nome) {
        dep.endereco = this.associadoModelo.endereco;
        dep.matricula = this.associadoModelo.matricula;
        dep.tipoParentesco.id = TipoParentescoEnum.getByDescCompleta(dep.tipoParentesco.descricao.toUpperCase()).codigo;
      } else {
        delete this.associadoModelo.dependentes;
      }
    }
    this.associadoService.salvar(this.associadoModelo, (callback) => {
      console.log("cadastrado com sucesso!");
      alert("cadastrado com sucesso!");
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
