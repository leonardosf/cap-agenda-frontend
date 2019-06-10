import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDados } from '../model/dialog.dados';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaModelo } from 'src/app/modelos/pessoaModelo';

import {Observable} from 'rxjs'
import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';


@Component({
    selector: 'dialog-visualizacao',
    templateUrl: './dialog-visualizacao.component.html',
    styleUrls: ['./dialog-visualizacao.component.scss']
})
export class DialogVisualizacaoComponent implements OnInit{

    pacientesFiltrados: Observable<PessoaModelo[]>;
    pacientesForm;
    isLoading = false

    constructor(
        public dialogRef: MatDialogRef<DialogVisualizacaoComponent>,
        @Inject(MAT_DIALOG_DATA) public dialogDados: DialogDados, public fb:FormBuilder,
            private associado:AssociadoService) {}
   
    ngOnInit(): void {
        this.pacientesForm = this.fb.group({
            nome: null
        });

        this.pacientesForm
            .get('nome')
            .valueChanges
            .pipe(
                debounceTime(300),
                tap(() => this.isLoading = true),
                switchMap(nome => typeof nome === 'object' ? [] : this.associado.recuperarPaciente(nome)
                    .pipe(
                        finalize(() => this.isLoading = false),
                    )
                )
            )
            .subscribe((pacientes) => {
                this.pacientesFiltrados = pacientes.conteudo;
                this.dialogDados.dados.paciente = this.pacientesFiltrados;
            });

        if(this.dialogDados.dados != undefined && this.dialogDados.dados.nome != undefined) {
            this.pacientesForm.get('nome').patchValue(this.dialogDados.dados.nome);
        }
    }

    displayFn(paciente: PessoaModelo) {
        if(paciente && paciente.nome) {
            return paciente.nome;
        } else {
            return paciente;
        }
    }
}