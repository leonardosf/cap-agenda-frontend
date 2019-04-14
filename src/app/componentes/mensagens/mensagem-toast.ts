import { MatSnackBar } from "@angular/material";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MensagemToast {

    constructor(private snackBar: MatSnackBar) {}

    mostrar(mensagem:string, acao?:string) {
        this.snackBar.open(mensagem, acao, {
            duration: 2000
        });
    }
}