import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {MatPaginator, MatTableDataSource, MatPaginatorIntl} from '@angular/material';
import { AssociadoModelo } from "src/app/modelos/associado/associadoModelo";

@Component({
    selector: 'tabela-associado',
    templateUrl: './tabela-associado.component.html',
    styleUrls: ['./tabela-associado.component.scss']
})
export class TabelaAssociadoComponent implements OnInit{

    @Input()
    lstAssociado;
    dataSource;

    displayedColumns: string[] = ['id', 'matricula', 'nome', 'dataNascimento', 'acao'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(mat:MatPaginatorIntl) {
        mat.itemsPerPageLabel = 'Itens por pagina';
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource<AssociadoModelo>(this.lstAssociado);
        this.dataSource.paginator = this.paginator;
    }

}