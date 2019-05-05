import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { FuncionarioModelo } from 'src/app/modelos/funcionario/funcionarioModelo';
import { FuncionarioService } from 'src/app/servicos/funcionario/funcionario.service';
import { FuncionarioFormGroup } from '../funcionario.form.group';

@Component({
  selector: 'cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.scss']
})
export class CadastrarFuncionarioComponent implements OnInit {

  formFuncionario: FormGroup;
  funcionarioModelo:FuncionarioModelo;

  constructor(public fb: FormBuilder, private http: FuncionarioService) {}

  ngOnInit() {
    const funcionarioFormGroup = new FuncionarioFormGroup(this.fb);
    this.formFuncionario = funcionarioFormGroup.montarForGroup();
  }

  salvar() {
    this.funcionarioModelo = {...this.formFuncionario.value};
    Utils.removerMascaras(this.funcionarioModelo);
    this.http.salvar(this.funcionarioModelo);
  }

}
