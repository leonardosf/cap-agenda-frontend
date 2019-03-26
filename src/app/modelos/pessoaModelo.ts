import { EstadoCivilModelo } from "./estadoCivilModelo";
import { SexoEnum } from "../enums/sexoEnum";
import { TelefoneModelo } from "./telefoneModelo";
import { EnderecoModelo } from "./enderecoModelo";

export class PessoaModelo {

    id:Number;
    nome:String;
    cpf:Number;
    // LocalDate JAVA
    dataEmissaoRg:Date;
    numeroRg:String;
    orgaoEmissor:String;
    // LocalDate
    dataNascimento:Date
    email:String;
    estadoCivil: EstadoCivilModelo;
    naturalidade:String;
    nascionalidade:String;
    nomeMae:String;
    nomePai:String;
    sexo: SexoEnum;
    endereco: EnderecoModelo;
    telefones: Array<TelefoneModelo>;

}