import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { ConsultorioModelo } from 'src/app/modelos/consultorio/consultorioModelo';
import { ConsultorioFormGroup } from '../consultorio.form.group';
import { ConsultorioService } from 'src/app/servicos/consultorios/consultorio.service';

@Component({
  selector: 'cadastrar-consultorio',
  templateUrl: './cadastrar-consultorio.component.html',
  styleUrls: ['./cadastrar-consultorio.component.scss']
})
export class CadastrarConsultorioComponent implements OnInit {

  formConsultorio: FormGroup;
  consultorioModelo:ConsultorioModelo;

  constructor(public fb: FormBuilder, private http: ConsultorioService) {}

  ngOnInit() {
    const consultorioFormGroup = new ConsultorioFormGroup(this.fb);
    this.formConsultorio = consultorioFormGroup.montarForGroup();
  }

  salvar() {
    this.consultorioModelo = {...this.formConsultorio.value};
    Utils.removerCaracteresEspeciais(this.consultorioModelo);
    this.consultorioModelo.telefones[0].numero = this.consultorioModelo.telefones[0].numero.trim();
    this.http.salvar(this.consultorioModelo);
  }

}
