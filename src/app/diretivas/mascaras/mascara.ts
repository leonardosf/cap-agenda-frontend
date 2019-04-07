import { Directive, Attribute } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CpfFormatador } from "../formatadores/cpf-formatador";
import { CnpjFormatador } from "../formatadores/cnpj-formatador";

@Directive({
    selector: '[mascara]',
    host: { '(keyup)': 'onInputChange($event)' },
    providers: [FormControl]
})
export class MascaraDirective {

    private tipo: string;

    constructor(public model: FormControl, @Attribute('mascara') tipo: string) {
        this.tipo = tipo;
    }

    onInputChange(event) {
        let valorLimpo = event.target.value.replace(/[^\d]+/g, '');
        switch (this.tipo) {
            case "CPF":
                this.cpf(valorLimpo);
                return;
            case "CNPJ":
                this.cnpj(valorLimpo);
                return;
            case "CPF-CNPJ":
                this.cpfCnpj(valorLimpo);
                return;
            case "MONETARIO":
                this.monetario(valorLimpo);
                return;
            case "MONETARIO-NULL":
                this.monetarioNull(valorLimpo);
                return;
            case "TELEFONE":
                this.telefone(valorLimpo);
                return;
            case "CEP":
                this.cep(valorLimpo);
                return;
            default:
                return;
        }
    }

    private cpf(valorLimpo: any) {
        this.model.patchValue(CpfFormatador.formatarIncompleto(valorLimpo));
    }

    private cnpj(valorLimpo: any) {
        this.model.patchValue(CnpjFormatador.formatarIncompleto(valorLimpo));
    }

    private cpfCnpj(valorLimpo: any) {
        if (valorLimpo.length <= 11) {
            this.model.patchValue(CpfFormatador.formatarIncompleto(valorLimpo));
        } else {
            this.model.patchValue(CnpjFormatador.formatarIncompleto(valorLimpo));
        }
    }

    private telefone(valorLimpo: any) {
        let telefone = valorLimpo.replace(/(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
        this.model.patchValue(telefone);
    }

    private monetario(valorLimpo: any) {
        if (!valorLimpo) {
            this.model.patchValue(valorLimpo);
            return;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        this.model.patchValue(v);
    }

    private monetarioNull(valorLimpo: any) {
        if (!valorLimpo) {
            this.model.patchValue(valorLimpo);
            return;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        if (numero > 0) {
            v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else {
            v = '';
        }
        this.model.patchValue(v);
        return;
    }

    private cep(valorLimpo: any) {
        let telefone = valorLimpo.replace(/(\d{5})(\d{3})$/, '$1-$2');
        this.model.patchValue(telefone);
    }

}