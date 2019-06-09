export class Tabela {

    colunas: Array<Coluna> = new Array<Coluna>();

    constructor(colunas: Array<Coluna>) {
        this.colunas = colunas;
    }

}

export class Coluna {

    prop: string;
    name: string;
    flexGrow: number;
    tipo: string;
    acoes: Array<Acao> = new Array<Acao>();

    constructor(prop = '', name = '', flexGrow = 1, tipo = tipos.TEXTO, acoes = []) {
        this.prop = prop;
        this.name = name;
        this.flexGrow = flexGrow;
        this.tipo = tipo;
        this.acoes = acoes;
    }

}

export class Acao {
    icone: string;
    onClick: Function;

    constructor (icone = '', onClick = undefined) {
        this.icone = icone;
        this.onClick = onClick;
    }

}

export const tipos = {
    TEXTO : 'texto',
    ACAO : 'acao',
    DATA: 'data',
    HORA: 'hora'
}

export class TabelaBuilder {

    private colunas: Array<Coluna> = new Array<Coluna>();

    public static getBuilder(): TabelaBuilder {
        return new TabelaBuilder();
    }

    addColunaTexto(prop = '', name = '', flexGrow = 1): TabelaBuilder {
        this.colunas.push(new Coluna(prop, name, flexGrow, tipos.TEXTO))
        return this;
    }

    addColunaData(prop = '', name = '', flexGrow = 1): TabelaBuilder {
        this.colunas.push(new Coluna(prop, name, flexGrow, tipos.DATA))
        return this;
    }

    addColunaHora(prop = '', name = '', flexGrow = 1): TabelaBuilder {
        this.colunas.push(new Coluna(prop, name, flexGrow, tipos.HORA))
        return this;
    }

    addColunaAcao(nome, flexGrow, acoes: Array<Acao>): TabelaBuilder {
        this.colunas.push(new Coluna('acao', nome, flexGrow, tipos.ACAO, acoes));
        return this;
    }

    build(): Tabela {
        return new Tabela(this.colunas);
    }

}

export class AcaoBuilder {

    private acoes: Array<Acao> = new Array<Acao>();

    static getBuilder(): AcaoBuilder {
        return new AcaoBuilder();
    }

    add(icone: string, onClick: Function): AcaoBuilder {
        this.acoes.push(new Acao(icone, onClick))
        return this;
    }

    build(): Array<Acao> {
        return this.acoes;
    }

}
/*
colunas = [ { prop: 'id', name: 'Codigo', flexGrow: 3, tipo: 'texto' }, { prop: 'nome', name: 'Nome', flexGrow: 3, tipo: 'texto' }, { prop: 'competencia', name: 'Competencia', flexGrow: 3, tipo: 'texto' },
{ prop: 'acoa', name: 'Ações', flexGrow: 3, tipo: 'acao', acoes: [ { icone: 'edit', onClick: () => alert('clicou') }, { icone: 'delete_outline', onClick: () => alert('clicou') }, { icone: 'search', onClick: () => alert('clicou') }] }
];
*/