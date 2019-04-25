import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
export class AssociadoFormGroup {

    private fb: FormBuilder;
    private form: FormGroup;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    montarForGroup() {
        this.form = this.fb.group({
            nome: new FormControl('', Validators.required),
            matricula: new FormControl('', Validators.required),
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
            nascionalidade: new FormControl('', Validators.required),
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
            ]),
            dependentes: this.fb.array([
                new FormGroup({
                    nome: new FormControl(''),
                    matricula: new FormControl(''),
                    cpf: new FormControl(''),
                    numeroRg: new FormControl(''),
                    dataEmissaoRg: new FormControl(''),
                    orgaoEmissor: new FormControl(''),
                    dataNascimento: new FormControl(''),
                    sexo: new FormControl(''),
                    tipoParentesco: new FormGroup({
                        id: new FormControl(''),
                        descricao: new FormControl('')
                    })
                })
            ])
        });
        return this.form;
    }

}
