import { Preguntas } from './preguntas';

export class PreguntasEs implements Preguntas {
    preguntarHora(): String {
        return '¿qué hora es?';
    }    
    preguntarTiempo(): String {
        return '¿qué tiempo hace?';
    }


}