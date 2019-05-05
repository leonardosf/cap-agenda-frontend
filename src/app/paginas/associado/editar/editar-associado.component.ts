import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { TipoParentescoEnum } from 'src/app/enums/tipoParentescoEnum';
import { AssociadoFormGroup } from '../associado.form.group';
import { Formatador } from 'src/app/diretivas/formatadores/formatador';

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
        this.formatarCampos(resposta);
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
    Utils.removerMascaras(this.associadoModelo)
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

  formatarCampos(resposta: any): any {
    resposta.cpf = Formatador.formatarCPF(resposta.cpf);
    resposta.numeroRG = Formatador.formatarRG(resposta.numeroRG);
    resposta.endereco.cep = Formatador.formatarCEP(resposta.endereco.cep.toString());
    resposta.telefones.filter(tel => tel.numero = Formatador.formatarTelefone(tel.numero.toString()));
  }

}
