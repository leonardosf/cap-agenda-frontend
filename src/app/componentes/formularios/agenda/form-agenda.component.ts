import { FormBase } from './../form.base';
import { Component, Input, ElementRef, ViewChild, OnInit } from "@angular/core";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'form-agenda',
    templateUrl: './form-agenda.component.html',
    styleUrls: ['./form-agenda.component.scss']
})
export class FormAgendaComponent extends FormBase implements OnInit {

    @Input()
    public formAgenda: FormGroup;
    public tempoAtendimentos = [20, 30, 40, 50, 60];
    public diasSemanas = [ { id: 1, descricao: 'Domingo' }, { id: 2, descricao: 'Segunda' }, { id: 3, descricao: 'Terça' }, { id: 4, descricao: 'Quarta' }];
    public dias = [];

    public visible = true;
    public selectable = true;
    public removable = true;
    public addOnBlur = true;
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public filteredDiasSemanas: Observable<Array<any>>;
    private diasSemanasCtrl;

    @ViewChild('diaSemanaInput') diaSemanaInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor() {
        super();        
    }

    ngOnInit() {
        this.iniciarFiltroAutoComplete();
    }

    private iniciarFiltroAutoComplete() {
        this.diasSemanasCtrl = this.formAgenda.get('diasSemana');        
        this.filteredDiasSemanas = this.diasSemanasCtrl.valueChanges.pipe(
            startWith(null),
            map((item) => item ? this.filtrar(item) : this.diasSemanas.slice())
        );
    }

    add(event: MatChipInputEvent): void {
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            if ((value || '').trim() && this.isContem(value, this.diasSemanas)) {
                this.dias.push(value.trim());
            }

            if (input) {
                input.value = '';
            }

            this.diasSemanasCtrl.setValue(null);
        }
    }
    
    remove(item: string): void {
        const index = this.dias.indexOf(item);         
        if (index >= 0) {
            const diaSemana = this.dias[index];
            Array.prototype.splice.apply(this.diasSemanas, [diaSemana.id - 1, 0].concat(diaSemana));
            this.dias.splice(index, 1);
            this.iniciarFiltroAutoComplete();
        }
    }
    
    selected(event: MatAutocompleteSelectedEvent): void {
        const dia = event.option.viewValue;
        const index = this.diasSemanas.findIndex(item => dia.toLowerCase() === item.descricao.toLowerCase());        
        this.dias.push(this.diasSemanas[index]);
        this.diaSemanaInput.nativeElement.value = '';
        this.diasSemanasCtrl.setValue(null);
        this.diasSemanas.splice(index, 1);       
    }

    private filtrar(value): Array<any> {
        const filterValue = (typeof value === 'string' || value instanceof String) ? value : value.descricao.toLowerCase();
        return this.diasSemanas
            .filter(item => item.descricao.toLowerCase().indexOf(filterValue) === 0)
            .filter(item => !this.isContem(item, this.dias));
    }

    private isContem(dia, dias): boolean {
        let contem = false;
        for (const d of dias) {
            if (d.id === dia.id) {
                contem = true;
                break;
            }
        }
        return contem;
    }

}