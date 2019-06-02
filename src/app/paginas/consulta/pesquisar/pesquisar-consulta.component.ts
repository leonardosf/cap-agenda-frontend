import { ConsultaService } from './../../../servicos/consulta/consulta.service';
import { Consulta } from './../../../modelos/consulta/consulta.model';
import { AcaoBuilder } from './../../../componentes/tabelas/tabela-paginada/tabela';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Tabela, TabelaBuilder } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { MensagemToast } from 'src/app/componentes/mensagens/mensagem-toast';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';

@Component({
    selector: 'app-consulta-associado',
    templateUrl: './pesquisar-consulta.component.html',
    styleUrls: ['./pesquisar-consulta.component.scss']
})
export class PesquisarConsultaComponent implements OnInit {

    formPesquisaConsulta: FormGroup;
    consultas: Array<Consulta> = new Array<Consulta>();
    filtro = { pagina: 0, limite: 10 };
    total = 0;
    tabela: Tabela;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private http: ConsultaService,
              private mensagem: MensagemToast){

    this.formPesquisaConsulta = this.criarFormPesquisa();

    const acoes = AcaoBuilder.getBuilder()
                             //.add('edit', funcionario => this.editar(funcionario))
                             //.add('delete_outline', funcionario => this.remover(funcionario))
                             //.add('search', funcionario => this.visualizar(funcionario))
                             .build();
    this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('pessoa.nome', 'Nome', 2)
                               .addColunaTexto('data', 'Data', 6)
                               .addColunaTexto('horaInicio', 'Hora', 2)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
  }

    private criarFormPesquisa(): FormGroup {
        return this.fb.group({
            cpf: new FormControl(),
            nome: new FormControl()
        });
    }

    ngOnInit(): void {
        this.carregarConsultas();
    }

    editar(consulta) {
             
    }

    remover(consulta) {
        
    }

    visualizar(consulta) {
      
    }

    private carregarConsultas() {
        this.http.recuperarPaginada({ limite: 1000 }, response => {
            this.consultas = response.conteudo;
            this.total = response.total;
        }, () => {
        });
    }

    private carregarTabela(filtro) {
        this.http.recuperarPaginada(filtro, resposta => {
            this.consultas = resposta.conteudo;
            this.total = resposta.total;
        }, erro => {
            this.mensagem.mostrar(erro.error.mensagem, "OK");
        });
    }

    pesquisar() {
        this.filtro = {...this.filtro, ...this.formPesquisaConsulta.value};
        Utils.removerCaracteresEspeciais(this.filtro);
        this.carregarTabela(this.filtro);
    }  
}
