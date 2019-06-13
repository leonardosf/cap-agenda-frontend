import { Consulta } from './../../modelos/consulta/consulta.model';
import { AcaoBuilder, TabelaBuilder, Tabela } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { ConsultaService } from './../../servicos/consulta/consulta.service';
import { HttpService } from './../../servicos/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    public totaisConsultas = [];
    consultas: Array<Consulta> = new Array<Consulta>();
    filtro = { pagina: 0, limite: 10 };
    total = 0;
    tabela: Tabela;

    constructor(private httpService: ConsultaService){}

    ngOnInit(): void {
        this.httpService.totalConsultasAgendadasDia(resposta => {
            this.totaisConsultas = resposta;
            if (this.totaisConsultas.length > 4) {
                this.totaisConsultas = this.totaisConsultas.sort((a, b) => a.total - b.total).reverse().slice(0, 4);
            }
            
        }, () => {

        })

        this.configurarTabela();
        this.carregarConsultas();
    }

    private configurarTabela() {
        const acoes = AcaoBuilder.getBuilder()
                             //.add('edit', funcionario => this.editar(funcionario))
                             //.add('delete_outline', funcionario => this.remover(funcionario))
                             //.add('search', funcionario => this.visualizar(funcionario))
                             .build();
        this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('pessoa.nome', 'Nome', 2)
                               .addColunaData('data', 'Data', 6)
                               .addColunaHora('horaInicio', 'Hora', 2)
                               .addColunaTexto('situacao', 'Situação', 2)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
    }

    private carregarConsultas() {
        this.httpService.carregarProximosAtendimentos({ limite: 10 }, response => {
            this.consultas = response.conteudo;
            this.total = response.total;
        }, () => {
        });
    }
}