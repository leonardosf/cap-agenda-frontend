import { Directive, Attribute, ElementRef, HostListener } from "@angular/core";
import { CpfFormatador } from "../formatadores/cpf-formatador";
import { CnpjFormatador } from "../formatadores/cnpj-formatador";

@Directive({
    selector: '[mascara]'
})
export class MascaraDirective {

    private tipo: string;
    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Delete' ];

    constructor(private el: ElementRef, @Attribute('mascara') tipo: string) {
        this.tipo = tipo;
    }
    
    @HostListener('keyup', [ '$event' ])
    onInputChange(event: KeyboardEvent) {

        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        let current: string = this.el.nativeElement.value;
        let valorLimpo = current.replace(/[^\d]+/g, '');

        switch (this.tipo) {
            case "CPF":
                this.el.nativeElement.value = this.cpf(valorLimpo);
                return event.preventDefault();
            case "CNPJ":
                this.el.nativeElement.value = this.cnpj(valorLimpo);
                return event.preventDefault();
            case "CPF-CNPJ":
                this.el.nativeElement.value = this.cpfCnpj(valorLimpo);
                return event.preventDefault();
            case "MONETARIO":
                this.el.nativeElement.value = this.monetario(valorLimpo);
                return event.preventDefault();
            case "MONETARIO-NULL":
                this.el.nativeElement.value = this.monetarioNull(valorLimpo);
                return event.preventDefault();
            case "TELEFONE":
                this.el.nativeElement.value = this.telefone(valorLimpo);
                return event.preventDefault();
            case "CEP":
                this.el.nativeElement.value = this.cep(valorLimpo);
                return event.preventDefault();
            case "RG":
                this.el.nativeElement.value = this.rg(valorLimpo);
                return event.preventDefault();
            default:
                return;
        }
    }

    private cpf(valorLimpo: any) {
        return CpfFormatador.formatarIncompleto(valorLimpo);
    }

    private cnpj(valorLimpo: any) {
        return CnpjFormatador.formatarIncompleto(valorLimpo);
    }

    private cpfCnpj(valorLimpo: any) {
        if (valorLimpo.length <= 11) {
            return CpfFormatador.formatarIncompleto(valorLimpo);
        } else {
            return CnpjFormatador.formatarIncompleto(valorLimpo);
        }
    }

    private telefone(valorLimpo: any) {
        if(valorLimpo.length === 9) {
            return valorLimpo.replace(/(\d{5})(\d{4})$/, "$1-$2");
        }
        let telefone = valorLimpo.replace(/(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
        return telefone;
    }

    private monetario(valorLimpo: any) {
        if (!valorLimpo) {
            return valorLimpo;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        return v;
    }

    private monetarioNull(valorLimpo: any) {
        if (!valorLimpo) {
            return valorLimpo;
            return;
        }
        let v = valorLimpo + 'e-2';
        let numero = Number(v);
        if (numero > 0) {
            v = numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else {
            v = '';
        }
        return v;
    }

    private cep(valorLimpo: any) {
        let telefone = valorLimpo.replace(/(\d{5})(\d{3})$/, '$1-$2');
        return telefone;
    }

    private rg(valorLimpo: any) {
        return valorLimpo.replace(/(\d{1})(\d{3})(\d{3})$/, '$1.$2.$3');
    }

}