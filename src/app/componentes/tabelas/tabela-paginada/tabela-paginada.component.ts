import { Pagina } from './pagina';
import { HttpService } from 'src/app/servicos/http.service';
import { Component, Input, OnInit, ViewChild, SimpleChanges, OnChanges, ChangeDetectorRef } from "@angular/core";
import { MensagemToast } from '../../mensagens/mensagem-toast';

@Component({
    selector: 'tabela-paginada',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.scss']
})
export class TabelaPaginadaComponent implements OnInit, OnChanges {

    @Input()
    public colunas = [];
    @Input()
    public dados = [];
    @Input()
    public filtro = { pagina: 0, limite: 10 };    
    @Input()
    public destino;
    
    @Input()
    public total = 0;

    public pagina = new Pagina();

    public mensagem = { emptyMessage:'Nenhum resultado encontrado.' };

    constructor(private http: HttpService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            if (propName === 'dados') {    
                const dados = changes['dados'].currentValue;    
                const total = changes['total'] ? changes['total'].currentValue: this.total;    
                this.atualizarTabela({conteudo: dados, total: total, pagina: 0 });
            }
            if (propName === 'filtro') {
                this.filtro = changes['filtro'].currentValue
            }
        }
    }

    private atualizarTabela(resposta) {
        if(resposta.conteudo) {
            this.dados = [ ...resposta.conteudo ];
            this.pagina.numero = resposta.pagina;
            this.pagina.total = resposta.total;
            this.dados = this.dados.splice(0, 10);
        }
    }

    setPage(paginaInfo) {
        this.filtro = { ...this.filtro, pagina: paginaInfo.offset, limite: paginaInfo.pageSize };
        this.http.path = this.destino;
        this.http.recuperarPaginada(this.filtro, resposta => {        
            this.atualizarTabela(resposta);
        }, erro => {
            
        });
    }

}