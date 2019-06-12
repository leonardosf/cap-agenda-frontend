import { Component, Input } from "@angular/core";

@Component({
    selector: 'total-consulta',
    templateUrl: './total-consulta.component.html',
    styleUrls: ['./total-consulta.component.scss']
})
export class TotalConsultaComponent {

    @Input() total = 0;
    @Input() especialidade = '';

}