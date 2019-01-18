import { Preguntas } from './preguntas';

export class PreguntasEn implements Preguntas {
    preguntarHora(): String {
        return 'what time is it?';
    }
    preguntarTiempo(): String {
        return 'how is the weather?';
    }


}