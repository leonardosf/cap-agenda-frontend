import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

    @Input()
    public formAssociado:FormGroup;

    salvar() {

    }

    getErrorMessage() {
        return 'Campo obrigatório';
      }
}