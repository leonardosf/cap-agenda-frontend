import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { EstadoCivilEnum } from 'src/app/enums/estadoCivilEnum';
import { Utils } from 'src/app/utils/utils';
import { TipoTelefoneEnum } from 'src/app/enums/tipoTelefoneEnum';

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
    const associadoModelo:AssociadoModelo = {...this.formAssociado.value};
    associadoModelo.estadoCivil.id = EstadoCivilEnum.getByDescCompleta(associadoModelo.estadoCivil.descricao).id;
    associadoModelo.telefones[0].tipoTelefone.id = TipoTelefoneEnum.getByDescCompleta(associadoModelo.telefones[0].tipoTelefone.descricao.toUpperCase()).codigo;
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
