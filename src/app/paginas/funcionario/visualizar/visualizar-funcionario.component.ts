import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FuncionarioModelo } from 'src/app/modelos/funcionario/funcionarioModelo';
import { FuncionarioService } from 'src/app/servicos/funcionario/funcionario.service';
import { FuncionarioFormGroup } from '../funcionario.form.group';
import { Formatador } from 'src/app/diretivas/formatadores/formatador';

@Component({
  selector: 'visualizar-funcionario',
  templateUrl: './visualizar-funcionario.component.html',
  styleUrls: ['./visualizar-funcionario.component.scss']
})
export class VisualizarFuncionarioComponent implements OnInit {

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
          this.formFuncionario.disable();
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  formatarCampos(resposta: any): any {
    resposta.cpf = Formatador.formatarCPF(resposta.cpf);
    resposta.numeroRG = Formatador.formatarRG(resposta.numeroRG);
    resposta.endereco.cep = Formatador.formatarCEP(resposta.endereco.cep.toString());
    resposta.telefones.filter(tel => tel.numero = Formatador.formatarTelefone(tel.numero.toString()));
  }

}
