import { Saludos } from './saludos';

export class SaludosEn implements Saludos {
    buenosDias(): string {
        return 'good morning';
    }   
    buenasTardes(): string {
        return 'good afternoon';
    }


}