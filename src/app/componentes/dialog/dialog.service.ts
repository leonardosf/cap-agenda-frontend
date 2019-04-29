import { tipos } from './../tabelas/tabela-paginada/tabela';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';



export class DialogFactory {

    dados = { titulo: '', conteudo: '' };
    dialogComponent;

    constructor(public dialog: MatDialog, dialogComponent, dados) {
        this.dados = dados;
        this.dialogComponent = dialogComponent
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(this.dialogComponent, {
            width: '250px',
            data: { titulo: this.dados.titulo, conteudo: this.dados.conteudo }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

}