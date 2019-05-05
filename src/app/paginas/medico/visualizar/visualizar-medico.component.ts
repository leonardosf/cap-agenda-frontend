import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MedicoFormGroup } from '../medico.form.group';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';
import { MedicoService } from 'src/app/servicos/medicos/medico.service';
import { Formatador } from 'src/app/diretivas/formatadores/formatador';

@Component({
  selector: 'visualizar-medico',
  templateUrl: './visualizar-medico.component.html',
  styleUrls: ['./visualizar-medico.component.scss']
})
export class VisualizarMedicoComponent implements OnInit {

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
        this.formatarCampos(resposta);
          this.formMedico.patchValue(resposta);
          this.formMedico.disable();
      });
    });
  }

  ngOnInit() {}

  voltar() {
    this.location.back();
  }

  formatarCampos(resposta: any): any {
    resposta.cpf = Formatador.formatarCPF(resposta.cpf);
    resposta.numeroRG = Formatador.formatarRG(resposta.numeroRG);
    resposta.endereco.cep = Formatador.formatarCEP(resposta.endereco.cep.toString());
    resposta.telefones.filter(tel => tel.numero = Formatador.formatarTelefone(tel.numero.toString()));
  }

}
