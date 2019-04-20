import { AgendaFormGroup } from './../agenda.form.group';
import { MedicoService } from './../../../servicos/medicos/medico.service';
import { ConsultorioService } from './../../../servicos/consultorios/consultorio.service';
import { MensagemToast } from './../../../componentes/mensagens/mensagem-toast';
import { AgendaService } from './../../../servicos/agenda/agenda.service';
import { Agenda } from './../../../modelos/agenda/agenda';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';

@Component({
    selector: 'app-pesquisar-agenda',
    templateUrl: './pesquisar-agenda.component.html',
    styleUrls: ['./pesquisar-agenda.component.scss']
})
export class PesquisarAgendaComponent implements OnInit {

    formPesquisaAgenda: FormGroup;
    agendas: Array<Agenda>;
    consultorios = [];
    medicos = [];
    private filtro;

    constructor(
        private fb: FormBuilder, 
        private http: AgendaService,
        private mensagem: MensagemToast,
        private consultorioService: ConsultorioService,
        private medicoService: MedicoService) {
        const agendaFormGroup = new AgendaFormGroup(this.fb);
        this.formPesquisaAgenda = agendaFormGroup.montarFormGroupPesquisa();
    }

    ngOnInit(): void {
        this.carregarMedicos();
        this.carregarConsultorios();
    }

    private carregarConsultorios() {
        this.consultorioService.recuperarPaginada({ limite: 1000 }, response => {
            this.consultorios = response.conteudo;
        }, () => {
        });
    }

    private carregarMedicos() {
        this.medicoService.recuperarPaginada({ limite: 1000 }, response => {
            this.medicos = response.conteudo;
        }, () => {
        });
    }

    pesquisar() {
        this.filtro = { ...this.formPesquisaAgenda.value };
        debugger;
        this.http.recuperarPaginada(this.filtro, resposta => {
            this.agendas = resposta.content;
        }, erro => {
            console.log('ERRO CONSULTAR AGENDA', erro.error.mensagem);
            this.mensagem.mostrar(erro.error.mensagem, "OK");
        });
    }  
 
}
