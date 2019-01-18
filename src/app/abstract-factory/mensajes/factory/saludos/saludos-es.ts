import { Saludos } from './saludos';

export class SaludosEs implements Saludos {
    buenosDias(): string {
        return 'buenos días';
    }   
    buenasTardes(): string {
        return 'buenas tardes';
    }


}