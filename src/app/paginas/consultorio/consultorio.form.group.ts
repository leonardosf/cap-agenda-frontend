import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
export class ConsultorioFormGroup {

    private fb: FormBuilder;
    private form: FormGroup;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarForGroup() {
        this.form = this.fb.group({
            id: new FormControl(),
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required),
            endereco: new FormGroup({
                logradouro: new FormControl('', Validators.required),
                numero: new FormControl('', Validators.required),
                complemento: new FormControl('', Validators.required),
                bairro: new FormControl('', Validators.required),
                cidade: new FormControl('', Validators.required),
                cep: new FormControl('', Validators.required),
                uf: new FormControl('', Validators.required)

            }),
            telefones: this.fb.array([
                new FormGroup({
                    numero: new FormControl('', Validators.required),
                    tipoTelefone: new FormGroup({
                        id: new FormControl('', Validators.required),
                        descricao: new FormControl('')
                    })
                }),
            ])
        });
        return this.form;
    }

    montarFormGroupPesquisa() {
        return this.fb.group({
            numeroConselho: new FormControl(''),
            cpf: new FormControl(''),
            nome: new FormControl(''),
        });
    }
}

