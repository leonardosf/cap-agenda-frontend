import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
            horaInicioIntervalo: new FormControl('', Validators.required),
            horaFimIntervalo: new FormControl('', Validators.required),
            diasAtendimentos: this.fb.array([], this.validateArrayNotEmpty)
        });
    }

    validateArrayNotEmpty(c: FormControl) {
        if (c.value && c.value.length === 0) {
          return { 
            validateArrayNotEmpty: { valid: false }
          };
        }
        return null;
      }
    
}

