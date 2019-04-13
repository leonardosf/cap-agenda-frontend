import { FormGroup } from '@angular/forms';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'input-texto',
    templateUrl: './input-texto.component.html',
    styleUrls: ['./input-texto.component.scss']
})
export class InputTextoComponent {

    @Input()
    public name;
    @Input()
    public label;
    @Input()
    public formulario: FormGroup;
    @Input()
    public tamanhoMaximo = 100;
    @Input()
    public mensagemErro;    

    @Input()
    public tamanho;

    isValid(): Boolean {
        return this.formulario.controls[this.name].invalid;
    }

}