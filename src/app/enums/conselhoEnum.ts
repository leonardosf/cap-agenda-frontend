export class ConselhoEnum {

    public static CRM: ConselhoEnum = new ConselhoEnum(1, "CRM", "CONSELHO REGIONAL DE MEDICINA");
    public static CRO: ConselhoEnum = new ConselhoEnum(2, "CRO", "CONSELHO REGIONAL DE ODONTOLOGIA");

    public id: number;
    public descSigla: string;
    public descricao: string;

    constructor(id: number, descSigla: string, descricao: string) {
        this.id = id;
        this.descSigla = descSigla;
        this.descricao = descricao;
    }

    public static values(): Array<ConselhoEnum> {
        return [ConselhoEnum.CRM, ConselhoEnum.CRO];
    }

    public static getByDescCompleta(descricao: string): ConselhoEnum {
        for (let estado of ConselhoEnum.values()) {
            if (descricao.indexOf(estado.descricao) != -1) {
                return estado;
            }
        }
        return;
    }

}