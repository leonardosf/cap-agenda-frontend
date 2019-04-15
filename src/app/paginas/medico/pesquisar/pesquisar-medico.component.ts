import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'pesquisar-medico',
  templateUrl: './pesquisar-medico.component.html',
  styleUrls: ['./pesquisar-medico.component.scss']
})
export class PesquisarMedicoComponent implements OnInit {

  formPesquisaAssociado:FormGroup;
  lstAssociado:Array<AssociadoModelo>;
  associadoModelo

  constructor(public fb: FormBuilder, public http:AssociadoService){}

  ngOnInit(): void {

    this.formPesquisaAssociado = this.fb.group({
      matricula: new FormControl(''),
      cpf: new FormControl(''),
      nome: new FormControl(''),
    })
  }

  pesquisar() {
    this.associadoModelo = {...this.formPesquisaAssociado.value};
    this.removerCarateresEspeciais(this.associadoModelo);
    this.http.pesquisarAssociado(this.associadoModelo,
      (callback) => {
        this.lstAssociado = callback;
      })
  }  
  
  removerCarateresEspeciais(associadoModelo: AssociadoModelo): any {
    associadoModelo.matricula = Utils.somenteNumeros(associadoModelo.matricula);
    associadoModelo.cpf = Utils.somenteNumeros(associadoModelo.cpf);
  }
}
