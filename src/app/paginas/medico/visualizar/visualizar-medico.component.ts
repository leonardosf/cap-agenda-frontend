import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';

@Component({
  selector: 'visualizar-medico',
  templateUrl: './visualizar-medico.component.html',
  styleUrls: ['./visualizar-medico.component.scss']
})
export class VisualizarMedicoComponent implements OnInit {

  formMedico: FormGroup;
  medicoModelo:MedicoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location){
    this.router.queryParams.subscribe(parametro => {this.medicoModelo = JSON.parse(parametro['medico'])});

    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formMedico = medicoFormGroup.montarForGroup();
    this.formMedico.patchValue(this.medicoModelo);
    this.formMedico.disable();
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }


}
