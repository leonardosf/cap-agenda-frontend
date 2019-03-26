export class EstadoCivilEnum {

    public static SOL: EstadoCivilEnum = new EstadoCivilEnum(1, "SOLTEIRO");
    public static CAS: EstadoCivilEnum = new EstadoCivilEnum(2, "CASADO");
    public static DIV: EstadoCivilEnum = new EstadoCivilEnum(3, "DIVOLCIADO");
    public static SEP: EstadoCivilEnum = new EstadoCivilEnum(4, "SEPARADO");
    public static VIU: EstadoCivilEnum = new EstadoCivilEnum(5, "VIUVO");
    public static UNI: EstadoCivilEnum = new EstadoCivilEnum(6, "UNIAO ESTAVEL");

    public codigo: number;
    public descricao: string;

    constructor(codigo: number, descricao: string) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static values(): Array<EstadoCivilEnum> {
        return [EstadoCivilEnum.SOL, EstadoCivilEnum.CAS, EstadoCivilEnum.DIV, 
            EstadoCivilEnum.SEP, EstadoCivilEnum.VIU, EstadoCivilEnum.UNI];
    }

    public static getByDescCompleta(descricao: string): EstadoCivilEnum {
        for (let estado of EstadoCivilEnum.values()) {
            if (descricao.indexOf(estado.descricao) != -1) {
                return estado;
            }
        }
        return;
    }

}