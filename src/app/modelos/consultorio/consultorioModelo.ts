import { EnderecoModelo } from "../enderecoModelo";
import { TelefoneModelo } from "../telefoneModelo";

export class ConsultorioModelo {

    id:number;
    nome:string;
    descricao: string;
    endereco:EnderecoModelo;
    telefones:Array<TelefoneModelo>;
}