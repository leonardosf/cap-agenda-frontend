import { HttpService } from 'src/app/servicos/http.service';
import { MatPaginator, MatPaginatorIntl, MatTableDataSource, PageEvent } from '@angular/material';
import { Component, Input, OnInit, ViewChild, SimpleChanges, OnChanges } from "@angular/core";
import { Router } from '@angular/router';
import { MensagemToast } from '../mensagens/mensagem-toast';

@Component({
    selector: 'tabela-paginada',
    templateUrl: './tabela.component.html',
    styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, OnChanges {

    @Input()
    public columns = [];
    @Input()
    public dataSource = [];
    @Input()
    public page = 0;
    @Input()
    public tamanhoPaginas = [5, 10, 20];
    @Input()
    public filtro = { pagina: 0, limite: 10 };    
    @Input()
    public destino;
    
    @Input()
    public total = 0;

    public displayedColumns: string [] = []

    public rows;    

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
                private mat: MatPaginatorIntl, 
                private http: HttpService) {
        mat.itemsPerPageLabel = 'Itens por pagina';
        this.mat.getRangeLabel = this.rage;
        this.mat.nextPageLabel = 'Próxima Página';
        this.mat.firstPageLabel = 'Primeira Página';
        this.mat.lastPageLabel = 'Última Página';
        this.mat.previousPageLabel = 'Página Anterior';
    }

    ngOnInit() {
        this.getServerData(null);
        this.updateTable();
        this.total = 50;
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            if (propName === 'dataSource') {
                this.dataSource = changes[propName].currentValue;                
                this.updateTable();
            }
            if (propName === 'total') {
                this.total = changes[propName].currentValue; 
                this.updateTable();
            }
        }
    }

    private updateTable() {
        if (this.dataSource === undefined) this.dataSource = []; 
        this.rows = new MatTableDataSource(this.dataSource);
        this.rows.paginator = this.paginator;
        this.displayedColumns = this.columns.map(item => item.property);
    }

    private rage(page: number, pageSize: number, length: number) {
        if (length == 0 || pageSize == 0) { 
            return `0 of ${length}`; 
        } 
        length = Math.max(length, 0); 
        const startIndex = page * pageSize; 
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} de ${length}`; 
    }

    public getServerData(event?: PageEvent) {
        if (event === null) return;
        debugger;
        this.filtro = { ...this.filtro, pagina: event.pageIndex, limite: event.pageSize };
        this.http.path = this.destino;
        this.http.recuperarPaginada(this.filtro, response => {            
            this.dataSource = response.conteudo;
            this.page = response.pagina;
            this.total = response.total;
            this.rows = new MatTableDataSource(this.dataSource);
            return event;
        }, erro => {
            return event;
        });
    }

}