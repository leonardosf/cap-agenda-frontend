import { PessoaModelo } from "../pessoaModelo";
import { TipoParentescoModelo } from "./tipoParentescoModelo";

export class DependenteModelo extends PessoaModelo {

    tipoParentesco:TipoParentescoModelo;
}