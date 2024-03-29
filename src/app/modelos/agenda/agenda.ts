import { DiaAtendimento } from './../dias-atendimentos/dias-atendimentos';
export class Agenda  {
    id: number;
    nome: string;
    idMedico: number;
    idConsultorio: number;
    horaInicio: string;
    horaFim: string;
    horaInicioIntervalo: string;
    horaFimIntervalo: string;
    tempoAtendimento: number;
    competencia: string;
    consultas;
    diasAtendimentos: Array<DiaAtendimento> = new Array<DiaAtendimento>();	
    possuiIntervalo: boolean = false;
}