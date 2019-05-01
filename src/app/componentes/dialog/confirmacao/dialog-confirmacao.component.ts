import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDados } from '../model/dialog.dados';


@Component({
    selector: 'dialog-confirmacao',
    templateUrl: './dialog-confirmacao.component.html',
    styleUrls: ['./dialog-confirmacao.component.scss']
})
export class DialogConfirmacaoComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogConfirmacaoComponent>,
        @Inject(MAT_DIALOG_DATA) public dados: DialogDados) {}
   
}