import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AssociadoFormGroup } from '../associado.form.group';

@Component({
  selector: 'visualizar-associado',
  templateUrl: './visualizar-associado.component.html',
  styleUrls: ['./visualizar-associado.component.scss']
})
export class VisualizarAssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;

  constructor(public router:ActivatedRoute, public fb: FormBuilder, public location:Location){

    this.router.queryParams.subscribe(parametro => {this.associadoModelo = JSON.parse(parametro['associado'])});
    
    const associadoFormGroup = new AssociadoFormGroup(this.fb);
    this.formAssociado = associadoFormGroup.montarForGroup();

    this.formAssociado.patchValue(this.associadoModelo);
    this.formAssociado.disable();
  }

  ngOnInit() {

  }

  voltar() {
    this.location.back();
  }


}
