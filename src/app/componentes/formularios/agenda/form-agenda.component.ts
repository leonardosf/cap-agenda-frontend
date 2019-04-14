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
    public diasSemanas: string[] = ['Domingo', 'Segunda'];
    public dias = [];


    public visible = true;
    public selectable = true;
    public removable = true;
    public addOnBlur = true;
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public filteredFruits: Observable<string[]>;
    public fruitCtrl ;

    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor() {
        super();        
    }

    ngOnInit() {
        this.fruitCtrl = this.formAgenda.get('diasSemana');        
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this._filter(fruit) : this.diasSemanas.slice())
        );
    }

    add(event: MatChipInputEvent): void {
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;

            // Add our fruit
            if ((value || '').trim()) {
                this.dias.push(value.trim());
            }

            // Reset the input value
            if (input) {
                input.value = '';
            }

            this.fruitCtrl.setValue(null);
        }
    }
    
    remove(fruit: string): void {
        const index = this.dias.indexOf(fruit);
        if (index >= 0) {
            this.dias.splice(index, 1);
        }
    }
    
    selected(event: MatAutocompleteSelectedEvent): void {
        this.dias.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.diasSemanas.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

}