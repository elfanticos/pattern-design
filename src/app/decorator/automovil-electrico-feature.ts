import { AutomovilDecorator } from './automovil.decorator';
import { Automovil } from './automovil';

export class AutoElectricoFeature extends AutomovilDecorator {
    
    constructor(automovil:Automovil) {
        super(automovil);
    }

    start(): void {
        this.getAuto().start();
        console.log('Iniciar sistema operativo');
    }

    acell(): void {
        this.getAuto().acell();
        console.log('Iniciando electricamente');
    }

    stop(): void {
        this.getAuto().stop();
        console.log('Controlando frenos electronicos');
    }
}