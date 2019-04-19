import { FormBuilder, FormControl, Validators, FormArray, ValidatorFn } from '@angular/forms';
export class AgendaFormGroup {

    private fb: FormBuilder;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarFormGroup() {
        return this.fb.group({
            nome: new FormControl('', Validators.required),
            idMedico: new FormControl('', Validators.required),
            idConsultorio: new FormControl('', Validators.required),
            horaInicio: new FormControl('', Validators.required),
            horaFim: new FormControl('', Validators.required),
            tempoAtendimento: new FormControl('', Validators.required),
            competencia: new FormControl('', Validators.required),            
            diasAtendimentos: new FormArray([], this.minSelectedCheckboxes(1))
        });
    }

    minSelectedCheckboxes(min = 1) {
      const validator: ValidatorFn = (formArray: FormArray) => {
        const totalSelected = formArray.controls
          .map(control => control.value)
          .reduce((prev, next) => next ? prev + next : prev, 0);
        return totalSelected >= min ? null : { required: true };
      };    
      return validator;
    }
    
}

