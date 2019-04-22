import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { Utils } from 'src/app/utils/utils';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';

@Component({
  selector: 'cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.scss']
})
export class CadastrarMedicoComponent implements OnInit {

  formMedico: FormGroup;
  medicoModelo:MedicoModelo;

  constructor(public fb: FormBuilder, public associadoService: AssociadoService) {}

  ngOnInit() {
    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formMedico = medicoFormGroup.montarForGroup();
  }

  salvar() {
    this.medicoModelo = {...this.formMedico.value};
    this.removerCarateresEspeciais(this.medicoModelo);
    // this.medicoService.salvar(this.medicoModelo);
  }

  removerCarateresEspeciais(medicoModelo: MedicoModelo): any {
    medicoModelo.cpf = Utils.somenteNumeros(medicoModelo.cpf);
    medicoModelo.numeroRG = Utils.somenteNumeros(medicoModelo.numeroRG);
    medicoModelo.endereco.cep = Utils.somenteNumeros(medicoModelo.endereco.cep);

    if(medicoModelo.telefones.length > 0) {
      for(let tel of medicoModelo.telefones) {
        tel.numero = Utils.somenteNumeros(tel.numero);
      }
    }
  }

}
