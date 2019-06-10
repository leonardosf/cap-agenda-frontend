import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDados } from '../model/dialog.dados';
import { DialogConfirmacaoComponent } from '../confirmacao/dialog-confirmacao.component';
import { DialogVisualizacaoComponent } from '../visualizacao/dialog-visualizacao.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private dados: DialogDados;

    constructor(public dialog: MatDialog) {
    }

    confirmacao(dados: DialogDados) {
        const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
            width: '250px',
            data: { titulo: dados.titulo, conteudo: dados.conteudo, btnConfirmar: dados.btnConfirmar, btnCancelar: dados.btnCancelar, acaoConfirmar: dados.acaoConfirmar, acaoCancelar: dados.acaoCancelar },
            autoFocus: false           
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && dados.acaoConfirmar !== undefined) {
                dados.acaoConfirmar();
            } else if (!result && dados.acaoCancelar !== undefined) {
                dados.acaoCancelar();
            }
        });
    }

    visualizar(dadosDialog: DialogDados, tamanho:string) {
        const dialogRef = this.dialog.open(DialogVisualizacaoComponent, {
            width: tamanho,
            data: { dados: dadosDialog.dados, btnConfirmar: dadosDialog.btnConfirmar, btnCancelar: dadosDialog.btnCancelar, btnDesmarcar:dadosDialog.btnDesmarcar, acaoConfirmar: dadosDialog.acaoConfirmar, acaoCancelar: dadosDialog.acaoCancelar, acaoDesmarcar: dadosDialog.acaoDesmarcar },
            autoFocus: false           
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && dadosDialog.acaoConfirmar !== undefined) {
                dadosDialog.acaoConfirmar();
            } else if (!result && dadosDialog.acaoCancelar !== undefined) {
                dadosDialog.acaoCancelar();
            } else if (result && dadosDialog.acaoDesmarcar !== undefined) {
                dadosDialog.acaoDesmarcar();
            }
        });
    }
}