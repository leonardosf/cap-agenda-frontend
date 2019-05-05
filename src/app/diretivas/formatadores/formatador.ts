export class Formatador{

  // CPF
  static formatarCPF(valor:string) : string{
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4");
  }

  static formatarCPFIncompleto(valor:string) : string{
    if(valor.length >3 && valor.length <= 6){
      return valor.replace(/(\d{3})(\d{1,3})$/,"$1.$2");
    }
    if(valor.length >6 && valor.length <= 9){
      return valor.replace(/(\d{3})(\d{3})(\d{1,3})$/,"$1.$2.$3");
    }

    if(valor.length == 10){
      return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})$/,"$1.$2.$3-$4");
    }

    return this.formatarCPF(valor);
  }

  /** CNPJ */
  static formatarCNPJ(valor:string):string{
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5");
  }

  static formatarCNPJIncompleto(valor:string) : string{
    if(valor.length >2 && valor.length <= 5){
      return valor.replace(/(\d{2})(\d{1,3})$/,"$1.$2");
    }

    if(valor.length >5 && valor.length <= 8){
      return valor.replace(/(\d{2})(\d{3})(\d{1,3})$/,"$1.$2.$3");
    }

    if(valor.length >8 && valor.length <= 12){
      return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})$/,"$1.$2.$3/$4");
    }

    if(valor.length == 13){
      return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/,"$1.$2.$3/$4-$5");
    }

    return this.formatarCNPJ(valor);
  }

  // RG
  static formatarRG(rg: any): any {
    return rg.replace(/(\d{1})(\d{3})(\d{3})$/, '$1.$2.$3');
  }

  // CEP
  static formatarCEP(cep: any): any {
    return cep.replace(/(\d{5})(\d{3})$/, '$1-$2');
  }

  // TELEFONE
  static formatarTelefone(numero: any): any {
    if(numero.length === 9) {
      return numero.replace(/(\d{5})(\d{4})$/, "$1-$2");
    }
    let telefone = numero.replace(/(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
    return telefone;
  }
}
