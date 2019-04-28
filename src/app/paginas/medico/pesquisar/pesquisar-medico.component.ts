import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { Utils } from 'src/app/utils/utils';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';

@Component({
  selector: 'pesquisar-medico',
  templateUrl: './pesquisar-medico.component.html',
  styleUrls: ['./pesquisar-medico.component.scss']
})
export class PesquisarMedicoComponent implements OnInit {

  formPesquisaMedico:FormGroup;
  lstMedico:Array<MedicoModelo>;
  medicoModelo

  constructor(public fb: FormBuilder, public http:AssociadoService){}

  ngOnInit(): void {

    this.formPesquisaMedico = this.fb.group({
      matricula: new FormControl(''),
      cpf: new FormControl(''),
      nome: new FormControl(''),
    })
  }

  pesquisar() {
    this.medicoModelo = {...this.formPesquisaMedico.value};
    Utils.removerCarateresEspeciais(this.medicoModelo);
    this.http.pesquisarAssociado(this.medicoModelo,
      (callback) => {
        this.lstMedico = callback;
      })
  }  
  
}
