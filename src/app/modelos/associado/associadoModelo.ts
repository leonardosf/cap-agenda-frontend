import { PessoaModelo } from "../pessoaModelo";
import { DependenteModelo } from "../dependente/dependenteModelo";

export class AssociadoModelo extends PessoaModelo {

    matricula:String;
    dependentes:Array<DependenteModelo>;
}