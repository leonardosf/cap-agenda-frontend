import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
export class MedicoFormGroup {

    private fb: FormBuilder;
    private form: FormGroup;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarForGroup() {
        this.form = this.fb.group({
            id: new FormControl(),
            nome: new FormControl('', Validators.required),
            conselhoMedicina: new FormControl('', Validators.required),
            numeroConselho: new FormControl('', Validators.required),
            ufConselho: new FormControl('', Validators.required),
            cpf: new FormControl('', Validators.required),
            numeroRG: new FormControl('', Validators.required),
            dataEmissaoRG: new FormControl('', Validators.required),
            orgaoEmissor: new FormControl('', Validators.required),
            dataNascimento: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            estadoCivil: new FormGroup({
                id: new FormControl('', Validators.required),
                descricao: new FormControl('')
            }),
            naturalidade: new FormControl('', Validators.required),
            nacionalidade: new FormControl('', Validators.required),
            nomeMae: new FormControl('', Validators.required),
            nomePai: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
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

}

