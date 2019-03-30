export class SexoEnum {

    public static F: SexoEnum = new SexoEnum(1, "Feminino","F");
    public static M: SexoEnum = new SexoEnum(2, "Masculino", "M");

    public codigo: number;
    public descricao: string;
    public sigla: string;

    constructor(codigo: number, descricao: string, sigla:string) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.sigla = sigla;
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