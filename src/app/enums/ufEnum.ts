export class UfEnum {

    public static AC: UfEnum = new UfEnum(1, "AC", "Acre");
    public static AL: UfEnum = new UfEnum(2, "AL", "Alagoas");
    public static AM: UfEnum = new UfEnum(3, "AM", "Amazonas");
    public static AP: UfEnum = new UfEnum(4, "AP", "Amapá");
    public static BA: UfEnum = new UfEnum(5, "BA", "Bahia");
    public static CE: UfEnum = new UfEnum(6, "CE", "Ceará");
    public static DF: UfEnum = new UfEnum(7, "DF", "Distrito Federal");
    public static ES: UfEnum = new UfEnum(8, "ES", "Espírito Santo");
    public static GO: UfEnum = new UfEnum(9, "GO", "Goiás");
    public static MA: UfEnum = new UfEnum(10, "MA", "Maranhão");
    public static MT: UfEnum = new UfEnum(11, "MT", "Mato Grosso");
    public static MS: UfEnum = new UfEnum(12, "MS", "Mato Grosso do Sul");
    public static MG: UfEnum = new UfEnum(13, "MG", "Minas Gerais");
    public static PA: UfEnum = new UfEnum(14, "PA", "Pará");
    public static PB: UfEnum = new UfEnum(15, "PB", "Paraíba");
    public static PR: UfEnum = new UfEnum(16, "PR", "Paraná");
    public static PE: UfEnum = new UfEnum(17, "PE", "Pernambuco");
    public static PI: UfEnum = new UfEnum(18, "PI", "Piauí");
    public static RJ: UfEnum = new UfEnum(19, "RJ", "Rio de Janeiro");
    public static RN: UfEnum = new UfEnum(20, "RN", "Rio Grande do Norte");
    public static RS: UfEnum = new UfEnum(21, "RS", "Rio Grande do Sul");
    public static RO: UfEnum = new UfEnum(22, "RO", "Rondônia");
    public static RR: UfEnum = new UfEnum(23, "RR", "Roraima");
    public static SC: UfEnum = new UfEnum(24, "SC", "Santa Catarina");
    public static SP: UfEnum = new UfEnum(25, "SP", "São Paulo");
    public static SE: UfEnum = new UfEnum(26, "SE", "Sergipe");
    public static TO: UfEnum = new UfEnum(27, "TO", "Tocantins");

    public id: number;
    public descSigla: string;
    public descricao: string;

    constructor(id: number, descSigla: string, descricao: string) {
        this.id = id;
        this.descSigla = descSigla;
        this.descricao = descricao;
    }

    public static values(): Array<UfEnum> {
        return [UfEnum.AC, UfEnum.AL, UfEnum.AM, UfEnum.AP,
            UfEnum.BA, UfEnum.CE, UfEnum.DF, UfEnum.ES,
            UfEnum.GO, UfEnum.MA, UfEnum.MT, UfEnum.MS,
            UfEnum.MG, UfEnum.PA, UfEnum.PB, UfEnum.PR,
            UfEnum.PE, UfEnum.PI, UfEnum.RJ, UfEnum.RN,
            UfEnum.RS, UfEnum.RO, UfEnum.RR, UfEnum.SC,
            UfEnum.SP, UfEnum.SE, UfEnum.TO];
    }

    public static getByDescCompleta(descricao: string): UfEnum {
        for (let estado of UfEnum.values()) {
            if (descricao.indexOf(estado.descricao) != -1) {
                return estado;
            }
        }
        return;
    }

}