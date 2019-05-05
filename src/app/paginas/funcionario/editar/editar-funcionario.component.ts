import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { FuncionarioModelo } from 'src/app/modelos/funcionario/funcionarioModelo';
import { FuncionarioFormGroup } from '../funcionario.form.group';
import { FuncionarioService } from 'src/app/servicos/funcionario/funcionario.service';
import { Formatador } from 'src/app/diretivas/formatadores/formatador';

@Component({
  selector: 'editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup;
  funcionarioModelo:FuncionarioModelo;
  id;

  constructor(private router:ActivatedRoute, public fb: FormBuilder, private location:Location,
      private http:FuncionarioService){

    const funcionarioFormGroup = new FuncionarioFormGroup(this.fb);
    this.formFuncionario = funcionarioFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
        this.formatarCampos(resposta);
          this.formFuncionario.patchValue(resposta);
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  atualizar() {
    this.funcionarioModelo = {...this.formFuncionario.value};
    Utils.removerMascaras(this.funcionarioModelo);
    this.http.atualizar(this.funcionarioModelo);
  }

  formatarCampos(resposta: any): any {
    resposta.cpf = Formatador.formatarCPF(resposta.cpf);
    resposta.numeroRG = Formatador.formatarRG(resposta.numeroRG);
    resposta.endereco.cep = Formatador.formatarCEP(resposta.endereco.cep.toString());
    resposta.telefones.filter(tel => tel.numero = Formatador.formatarTelefone(tel.numero.toString()));
  }

}
