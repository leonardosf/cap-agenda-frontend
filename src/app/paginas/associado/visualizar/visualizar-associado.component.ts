import { Component, OnInit } from '@angular/core';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AssociadoFormGroup } from '../associado.form.group';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';

@Component({
  selector: 'visualizar-associado',
  templateUrl: './visualizar-associado.component.html',
  styleUrls: ['./visualizar-associado.component.scss']
})
export class VisualizarAssociadoComponent implements OnInit {

  formAssociado: FormGroup;
  associadoModelo:AssociadoModelo;
  id;

  constructor(private router:ActivatedRoute, public fb: FormBuilder, private location:Location,
    private http:AssociadoService){

    const associadoFormGroup = new AssociadoFormGroup(this.fb);
    this.formAssociado = associadoFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
          this.formAssociado.patchValue(resposta);
          this.formAssociado.disable();
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }


}
