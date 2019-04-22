import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicoFormGroup } from '../medico.form.group';

@Component({
  selector: 'visualizar-medico',
  templateUrl: './visualizar-medico.component.html',
  styleUrls: ['./visualizar-medico.component.scss']
})
export class VisualizarMedicoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location){
    this.router.queryParams.subscribe(parametro => {this.associadoModelo = JSON.parse(parametro['associado'])});

    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formAssociado = medicoFormGroup.montarForGroup();
    this.formAssociado.patchValue(this.associadoModelo);
    this.formAssociado.disable();
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }


}
