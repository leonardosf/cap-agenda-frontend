export class SexoEnum {

    public static F: SexoEnum = new SexoEnum(1, "Feminino");
    public static M: SexoEnum = new SexoEnum(2, "Masculino");

    public codigo: number;
    public descricao: string;

    constructor(codigo: number, descricao: string) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static values(): Array<SexoEnum> {
        return [SexoEnum.F, SexoEnum.M];
    }

    public static getByDescCompleta(descricao: string): SexoEnum {
        for (let sexo of SexoEnum.values()) {
            if (descricao.indexOf(sexo.descricao) != -1) {
                return sexo;
            }
        }
        return;
    }

}