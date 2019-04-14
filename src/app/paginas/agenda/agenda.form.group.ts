import { FormBuilder, FormControl, Validators } from '@angular/forms';
export class AgendaFormGroup {

    private fb: FormBuilder;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarFormGroup() {
        return this.fb.group({
            nome: new FormControl('', Validators.required),
            medico: new FormControl('', Validators.required),
            consultorio: new FormControl('', Validators.required),
            horaInicio: new FormControl('', Validators.required),
            horaFim: new FormControl('', Validators.required),
            tempoAtendimento: new FormControl('', Validators.required),
            competencia: new FormControl('', Validators.required),
            horaInicioIntervalo: new FormControl('', Validators.required),
            horaFimIntervalo: new FormControl('', Validators.required),
            diasSemana: new FormControl('', Validators.required)
        });
    }
    
}

