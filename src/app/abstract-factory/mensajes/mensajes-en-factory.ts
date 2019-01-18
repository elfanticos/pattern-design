import { MensajesAbstractFactory } from './mensajes-abstract-factory';
import { Preguntas } from './factory/preguntas/preguntas';
import { Saludos } from './factory/saludos/saludos';
import { PreguntasEn } from './factory/preguntas/preguntas-en';
import { SaludosEn } from './factory/saludos/saludos-en';

export class MensajesEnFactory implements MensajesAbstractFactory {
    getPreguntas(): Preguntas {
        return new PreguntasEn();
    }
    
    getSaludos():Saludos {
        return new SaludosEn();
    }


}