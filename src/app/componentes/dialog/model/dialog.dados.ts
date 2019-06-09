export interface DialogDados {
    titulo?: string;
    conteudo?: string;
    btnConfirmar?: string;
    btnCancelar?: string;
    btnDesmarcar?: string;
    acaoConfirmar?: Function;
    acaoCancelar?: Function;
    acaoDesmarcar?: Function;
    dados?:any;
}