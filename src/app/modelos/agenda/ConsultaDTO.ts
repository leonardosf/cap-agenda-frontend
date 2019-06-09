import { PessoaModelo } from "../pessoaModelo";

export class ConsultaDTO {
    id;
    data;
    horaInicio;
    horaFim;
    situacao;
    pessoa:PessoaModelo;
    agenda;
    dataHoraAgendamento;
    dataHoraCancelamento;
}
