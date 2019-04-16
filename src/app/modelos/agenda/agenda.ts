import { DiaAtendimento } from './../dias-atendimentos/dias-atendimentos';
export class Agenda  {
    nome: string;
    idMedico: number;
    idConsultorio: number;
    horaInicio: string;
    horaFim: string;
    horaInicioIntervalo: string;
    horaFimIntervalo: string;
    tempoAtendimento: number;
    competencia: string;
    diasAtendimentos: Array<DiaAtendimento> = new Array<DiaAtendimento>();	
}