import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDados } from '../model/dialog.dados';
import { DialogConfirmacaoComponent } from '../confirmacao/dialog-confirmacao.component';

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
}