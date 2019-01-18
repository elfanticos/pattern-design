import { Preguntas } from './factory/preguntas/preguntas';
import { Saludos } from './factory/saludos/saludos';

export interface MensajesAbstractFactory {
    getPreguntas(): Preguntas;
    getSaludos(): Saludos;
}