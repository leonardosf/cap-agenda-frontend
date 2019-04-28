import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {MatPaginator, MatTableDataSource, MatPaginatorIntl} from '@angular/material';
import { Router } from "@angular/router";
import { MensagemToast } from "../../mensagens/mensagem-toast";
import { MedicoModelo } from "src/app/modelos/medico/medicoModelo";
import { MedicoService } from "src/app/servicos/medicos/medico.service";

@Component({
    selector: 'tabela-medico',
    templateUrl: './tabela-medico.component.html',
    styleUrls: ['./tabela-medico.component.scss']
})
export class TabelaMedicoComponent implements OnInit{

    @Input()
    lstMedico:Array<MedicoModelo>;
    dataSource;

    displayedColumns: string[] = ['id', 'numeroConselho', 'nome', 'dataNascimento', 'acao'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(mat:MatPaginatorIntl, public http:MedicoService, public navegar:Router,
            private mensagem:MensagemToast) {

        mat.itemsPerPageLabel = 'Itens por pagina';
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource<MedicoModelo>(this.lstMedico);
        this.dataSource.paginator = this.paginator;
    }

    editar(id) {
        this.http.recuperar(id,
            (callback) => {
                let medico:MedicoModelo;
                medico = callback;
                this.navegar.navigate(["page/medico/editar"], {queryParams: {medico:JSON.stringify(medico)}});
            })
    }

    visualizar(id) {
        this.http.recuperar(id,
            (callback) => {
                let medico: MedicoModelo;
                medico = callback;
                this.navegar.navigate(["page/medico/visualizar"], { queryParams: { medico: JSON.stringify(medico) } });
            })
    }

    remover(id) {
        this.http.remover(id,
            () => {
                this.mensagem.mostrar("Removido com sucesso!","OK")
                let medico = this.lstMedico.filter(l => l.id == id);
                let indexMedico = this.lstMedico.indexOf(medico[0]);
                this.lstMedico.splice(indexMedico, 1);
                this.dataSource = new MatTableDataSource<MedicoModelo>(this.lstMedico);
                this.dataSource.paginator = this.paginator;
            })
    }

}