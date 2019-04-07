export class TipoParentescoEnum {

    public static FILHO:TipoParentescoEnum = new TipoParentescoEnum(1, "FILHO(S)");
    public static ESPOSO:TipoParentescoEnum = new TipoParentescoEnum(2 ,"ESPOSA");
    public static MARIDO:TipoParentescoEnum = new TipoParentescoEnum(3 ,"MARIDO");

    public codigo: number;
    public descricao: string;

    constructor(codigo:number, descricao:string) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static values(): Array<TipoParentescoEnum> {
        return [TipoParentescoEnum.FILHO, TipoParentescoEnum.ESPOSO];
    }

    public static getByDescCompleta(descricao: string): TipoParentescoEnum {
        for (let tipo of TipoParentescoEnum.values()) {
            if (descricao.indexOf(tipo.descricao) != -1) {
                return tipo;
            }
        }
        return;
    }
}