import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { ConsultorioFormGroup } from '../consultorio.form.group';
import { ConsultorioModelo } from 'src/app/modelos/consultorio/consultorioModelo';
import { ConsultorioService } from 'src/app/servicos/consultorios/consultorio.service';

@Component({
  selector: 'editar-consultorio',
  templateUrl: './editar-consultorio.component.html',
  styleUrls: ['./editar-consultorio.component.scss']
})
export class EditarConsultorioComponent implements OnInit {

  formConsultorio: FormGroup;
  consultorioModelo:ConsultorioModelo;
  id;

  constructor(private router:ActivatedRoute, public fb: FormBuilder, private location:Location,
      private http:ConsultorioService){

    const consultorioFormGroup = new ConsultorioFormGroup(this.fb);
    this.formConsultorio = consultorioFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
          this.formConsultorio.patchValue(resposta);
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  atualizar() {
    this.consultorioModelo = {...this.formConsultorio.value};
    Utils.removerCarateresEsp(this.consultorioModelo.endereco.cep);
    Utils.removerCarateresEsp(this.consultorioModelo.telefones[0].numero);
    this.http.atualizar(this.consultorioModelo);
  }

}
