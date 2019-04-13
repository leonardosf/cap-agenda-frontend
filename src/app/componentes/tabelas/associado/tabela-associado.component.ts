import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {MatPaginator, MatTableDataSource, MatPaginatorIntl} from '@angular/material';
import { AssociadoModelo } from "src/app/modelos/associado/associadoModelo";
import { AssociadoService } from "src/app/servicos/associado/associado.service";
import { Router } from "@angular/router";

@Component({
    selector: 'tabela-associado',
    templateUrl: './tabela-associado.component.html',
    styleUrls: ['./tabela-associado.component.scss']
})
export class TabelaAssociadoComponent implements OnInit{

    @Input()
    lstAssociado:Array<AssociadoModelo>;
    dataSource;

    displayedColumns: string[] = ['id', 'matricula', 'nome', 'dataNascimento', 'acao'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(mat:MatPaginatorIntl, public http:AssociadoService, public navegar:Router) {
        mat.itemsPerPageLabel = 'Itens por pagina';
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource<AssociadoModelo>(this.lstAssociado);
        this.dataSource.paginator = this.paginator;
    }

    editar(id) {
        this.http.recuperar(id,
            (callback) => {
                let associado:AssociadoModelo;
                associado = callback;
                this.navegar.navigate(["/editar/associado"], {queryParams: {associado:JSON.stringify(associado)}});
            })
    }

    visualizar(id) {
        this.http.recuperar(id,
            (callback) => {
                let associado: AssociadoModelo;
                associado = callback;
                this.navegar.navigate(["/visualizar/associado"], { queryParams: { associado: JSON.stringify(associado) } });
            })
    }

    remover(id) {
        this.http.remover(id,
            (callback) => {
                alert("Associado removido com sucesso!")
                let associado = this.lstAssociado.filter(l => l.id == id);
                let indexAssociado = this.lstAssociado.indexOf(associado[0]);
                this.lstAssociado.splice(indexAssociado, 1);
                this.dataSource = new MatTableDataSource<AssociadoModelo>(this.lstAssociado);
                this.dataSource.paginator = this.paginator;
            })
    }

}