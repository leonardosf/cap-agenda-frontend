import { TabelaBuilder, AcaoBuilder } from './../../../componentes/tabela-paginada/tabela';
import { AgendaFormGroup } from './../agenda.form.group';
import { MedicoService } from './../../../servicos/medicos/medico.service';
import { ConsultorioService } from './../../../servicos/consultorios/consultorio.service';
import { MensagemToast } from './../../../componentes/mensagens/mensagem-toast';
import { AgendaService } from './../../../servicos/agenda/agenda.service';
import { Agenda } from './../../../modelos/agenda/agenda';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { Tabela } from 'src/app/componentes/tabela-paginada/tabela';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pesquisar-agenda',
    templateUrl: './pesquisar-agenda.component.html',
    styleUrls: ['./pesquisar-agenda.component.scss']
})
export class PesquisarAgendaComponent implements OnInit {

    formPesquisaAgenda: FormGroup;
    agendas: Array<Agenda> = new Array<Agenda>();
    consultorios = [];
    medicos = [];
    private filtro = { pagina: 0, limite: 10 };
    total = 0;
    tabela: Tabela;

    constructor(
        private fb: FormBuilder, 
        private http: AgendaService,
        private mensagem: MensagemToast,
        private consultorioService: ConsultorioService,
        private medicoService: MedicoService,
        private router: Router) {
        const agendaFormGroup = new AgendaFormGroup(this.fb);
        this.formPesquisaAgenda = agendaFormGroup.montarFormGroupPesquisa();
   
        const acoes = AcaoBuilder.getBuilder()
                                 .add('edit', agenda => this.editar(agenda))
                                 .add('delete_outline', agenda => this.apagar(agenda))
                                 .add('search', agenda => this.visualizar(agenda))
                                 .build();
        this.tabela = TabelaBuilder.getBuilder()
                                   .addColunaTexto('id', 'Código', 3)
                                   .addColunaTexto('nome', 'Nome', 3)
                                   .addColunaTexto('competencia', 'Competência', 3)
                                   .addColunaAcao('Ações', 3, acoes)
                                   .build();
    }

    editar(agenda) {
        this.router.navigate([`/page/agenda/editar/${agenda.id}`]);      
    }

    apagar(agenda) {
        this.http.remover(agenda.id, () => {
            this.agendas = new Array<Agenda>();
            this.carregarTabela(this.filtro);
        });        
    }

    visualizar(agenda) {
        alert('Criar componente de visualizar agenda')
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
        this.filtro = { ...this.filtro, ...this.formPesquisaAgenda.value };
        this.carregarTabela(this.filtro);
    } 
    
    private carregarTabela(filtro) {
        this.http.recuperarPaginada(filtro, resposta => {
            this.agendas = resposta.conteudo;
            this.total = resposta.total;
        }, erro => {
            console.log('ERRO CONSULTAR AGENDA', erro.error.mensagem);
            this.mensagem.mostrar(erro.error.mensagem, "OK");
        });
    }
 
}