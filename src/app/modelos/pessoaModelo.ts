import { EstadoCivilModelo } from "./estadoCivilModelo";
import { SexoEnum } from "../enums/sexoEnum";
import { TelefoneModelo } from "./telefoneModelo";
import { EnderecoModelo } from "./enderecoModelo";

export class PessoaModelo {

    id:Number;
    nome:String;
    cpf:String;
    // LocalDate JAVA
    dataEmissaoRg:Date;
    numeroRG:String;
    orgaoEmissor:String;
    // LocalDate
    dataNascimento:Date
    email:String;
    estadoCivil: EstadoCivilModelo;
    naturalidade:String;
    nacionalidade:String;
    nomeMae:String;
    nomePai:String;
    sexo: SexoEnum;
    endereco: EnderecoModelo;
    telefones: Array<TelefoneModelo>;

}