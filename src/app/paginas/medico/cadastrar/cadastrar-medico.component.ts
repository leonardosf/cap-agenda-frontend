import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { Utils } from 'src/app/utils/utils';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';
import { MedicoService } from 'src/app/servicos/medicos/medico.service';

@Component({
  selector: 'cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.scss']
})
export class CadastrarMedicoComponent implements OnInit {

  formMedico: FormGroup;
  medicoModelo:MedicoModelo;

  constructor(public fb: FormBuilder, public medicoService: MedicoService) {}

  ngOnInit() {
    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formMedico = medicoFormGroup.montarForGroup();
  }

  salvar() {
    this.medicoModelo = {...this.formMedico.value};
    Utils.removerMascaras(this.medicoModelo);
    this.medicoService.salvar(this.medicoModelo);
  }

}
