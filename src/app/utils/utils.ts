import { HttpParams } from "@angular/common/http";
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Utils {

    static montarParametros(filtro) {
        let params = new HttpParams();
        if (Object.values(filtro).length > 0) {
            for (let key in filtro) {
                if (typeof filtro[key] === 'object') {
                    if (key != "constructor") {
                        params = params.set(key, filtro[key]);
                    }
                } else {
                    if (key != "constructor") {
                        if (!Utils.isNullOrEmpty(filtro[key]) && filtro[key] != "undefined") {
                            params = params.append(key, Utils.removerCarateresEsp(filtro[key]));
                        }
                    }
                }
            }
        }
        return params
    }

    static isNullOrEmpty(valor): boolean {
        if (valor == null || String(valor).trim() == "" || valor == undefined) {
            return true;
        }
        return false;
    }

    // Remove ponto, virgula e traço
    static removerCarateresEsp(valor) {
        if (!valor) {
            return;
        }
        if (typeof valor == 'number') {
            return valor;
        }
        return valor.replace(/[.,-]/g, "");
    }

    static somenteNumeros(valor): String {
        return valor.replace(/[^\d]+/g, '');
    }

    static montarForGroupAssociado(fb) {
        return fb.group({
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
            telefones: fb.array([
                new FormGroup({
                    numero: new FormControl('', Validators.required),
                    tipoTelefone: new FormGroup({
                        id: new FormControl('', Validators.required),
                        descricao: new FormControl('')
                    })
                }),
            ]),
            dependentes: fb.array([
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
        })
    }
}