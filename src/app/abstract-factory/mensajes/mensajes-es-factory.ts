import { MensajesAbstractFactory } from './mensajes-abstract-factory';
import { Preguntas } from './factory/preguntas/preguntas';
import { PreguntasEs } from './factory/preguntas/preguntas-es';
import { Saludos } from './factory/saludos/saludos';
import { SaludosEs } from './factory/saludos/saludos-es';

export class MensajesEsFactory implements MensajesAbstractFactory {
    getPreguntas(): Preguntas {
        return new PreguntasEs();
    }
    
    getSaludos():Saludos {
        return new SaludosEs();
    }


}