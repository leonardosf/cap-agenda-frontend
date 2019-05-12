import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDados } from '../model/dialog.dados';
import { EventEmitter } from 'events';


@Component({
    selector: 'dialog-visualizacao',
    templateUrl: './dialog-visualizacao.component.html',
    styleUrls: ['./dialog-visualizacao.component.scss']
})
export class DialogVisualizacaoComponent {

    nome = new EventEmitter();
    
    constructor(
        public dialogRef: MatDialogRef<DialogVisualizacaoComponent>,
        @Inject(MAT_DIALOG_DATA) public dados: DialogDados) {}
   
}