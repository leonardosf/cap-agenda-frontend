import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicoService } from 'src/app/servicos/medicos/medico.service';
import { ConsultorioModelo } from 'src/app/modelos/consultorio/consultorioModelo';
import { ConsultorioFormGroup } from '../consultorio.form.group';

@Component({
  selector: 'visualizar-consultorio',
  templateUrl: './visualizar-consultorio.component.html',
  styleUrls: ['./visualizar-consultorio.component.scss']
})
export class VisualizarConsultorioComponent implements OnInit {

  formConsultorio: FormGroup;
  consultorioModelo:ConsultorioModelo;
  id;

  constructor(private router:ActivatedRoute, public fb: FormBuilder, private location:Location,
    private http:MedicoService){

    const consultorioFormGroup = new ConsultorioFormGroup(this.fb);
    this.formConsultorio = consultorioFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
          this.formConsultorio.patchValue(resposta);
          this.formConsultorio.disable();
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

}
