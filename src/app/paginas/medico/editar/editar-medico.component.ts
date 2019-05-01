import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Utils } from 'src/app/utils/utils';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';
import { MedicoService } from 'src/app/servicos/medicos/medico.service';

@Component({
  selector: 'editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit {

  formMedico: FormGroup;
  medicoModelo:MedicoModelo;
  id;

  constructor(private router:ActivatedRoute, public fb: FormBuilder, private location:Location,
      private http:MedicoService){

    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formMedico = medicoFormGroup.montarForGroup();

    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.http.recuperar(this.id, resposta => {
          this.formMedico.patchValue(resposta);
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  atualizar() {
    this.medicoModelo = {...this.formMedico.value};
    Utils.removerCarateresEsp(this.medicoModelo.cpf);
    Utils.removerCarateresEsp(this.medicoModelo.numeroRG);
    Utils.removerCarateresEsp(this.medicoModelo.endereco.cep);
    Utils.removerCarateresEsp(this.medicoModelo.telefones[0].numero);
    // Utils.removerCaracteresEspeciais(this.medicoModelo)
    this.http.atualizar(this.medicoModelo);
  }

}
