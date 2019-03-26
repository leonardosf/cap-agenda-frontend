export class TipoTelefoneEnum {

    public static CEL:TipoTelefoneEnum = new TipoTelefoneEnum(1, "CELULAR");
    public static RES:TipoTelefoneEnum = new TipoTelefoneEnum(2 ,"RESIDENCIAL");
    public static COM:TipoTelefoneEnum = new TipoTelefoneEnum(3 ,"COMERCIAL");

    public codigo: number;
    public descricao: string;

    constructor(codigo:number, descricao:string) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static values(): Array<TipoTelefoneEnum> {
        return [TipoTelefoneEnum.CEL, TipoTelefoneEnum.RES, TipoTelefoneEnum.COM];
    }

    public static getByDescCompleta(descricao: string): TipoTelefoneEnum {
        for (let tipo of TipoTelefoneEnum.values()) {
            if (descricao.indexOf(tipo.descricao) != -1) {
                return tipo;
            }
        }
        return;
    }
}