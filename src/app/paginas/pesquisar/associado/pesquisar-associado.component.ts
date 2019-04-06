import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';

@Component({
  selector: 'app-pesquisar-associado',
  templateUrl: './pesquisar-associado.component.html',
  styleUrls: ['./pesquisar-associado.component.scss']
})
export class PesquisarAssociadoComponent implements OnInit {

  formPesquisaAssociado:FormGroup;
  lstAssociado:Array<AssociadoModelo>;

  constructor(public fb: FormBuilder, public http:AssociadoService){}

  ngOnInit(): void {

    this.formPesquisaAssociado = this.fb.group({
      matricula: new FormControl(''),
      cpf: new FormControl(''),
      nome: new FormControl(''),
    })
  }

  pesquisar() {
    this.http.pesquisarAssociado(
      (callback) => {
        this.lstAssociado = callback;
      })
  }  
}
