import { FormGroup, AbstractControl } from '@angular/forms';
import { FormBuilder, FormControl, Validators, FormArray, ValidatorFn } from '@angular/forms';
export class AgendaFormGroup {

    private fb: FormBuilder;
    private form: FormGroup;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarFormGroup() {
        this.form = this.fb.group({
            nome: new FormControl('', Validators.required),
            idMedico: new FormControl('', Validators.required),
            idConsultorio: new FormControl('', Validators.required),
            horaInicio: new FormControl('', [Validators.required ]),
            horaFim: new FormControl('', [Validators.required ]),
            tempoAtendimento: new FormControl('', Validators.required),
            competencia: new FormControl('', Validators.required),            
            horaInicioIntervalo: new FormControl('', null),
            horaFimIntervalo: new FormControl('', null),
            diasAtendimentos: new FormArray([], this.minSelectedCheckboxes(1)),
            possuiIntervalo: new FormControl(false)
        });
        this.adicionarFormDiasAtendimentos();
        return this.form;
    }

    private adicionarFormDiasAtendimentos() {
        if (this.form !== undefined) {
            for (let i = 0; i < 7; i++) {
                const control = new FormControl();
                (this.form.controls.diasAtendimentos as FormArray).push(control);
            }
        }      
    } 

    private minSelectedCheckboxes(min = 1) {
        const validator: ValidatorFn = (formArray: FormArray) => {
        const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((prev, next) => next ? prev + next : prev, 0);
            return totalSelected >= min ? null : { required: true };
        };    
        return validator;
    }

    montarFormGroupPesquisa() {
        return this.fb.group({
            nome: new FormControl(null),
            idMedico: new FormControl(null),
            idConsultorio: new FormControl(null),
        });
    }
    
}

export const validadorHora = (control: AbstractControl): Resposta => {
    const regex = new RegExp('(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)');
    console.log('antes', control.value.length);
    if (control.value.length > 4) {
        const campos = control.value.split(':');
        const hora = campos[0];
        const minuto = campos[1];
        console.log('hora', +hora);
        console.log('minuto', minuto);
        let horaOk = false;
        let minOk = false;
        if (+hora >= 0 && +hora < 24) horaOk = true;
        if (+minuto >= 0 && +minuto < 60) minOk = true;
        if (horaOk && minOk) {
            console.log('ok');
            return { 'hora': true };
        }
    } 
        
    return null;
}

interface Resposta {
    hora: boolean;
}

