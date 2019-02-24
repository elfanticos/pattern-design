import { MotorElectrico } from './motor-electrico';
import {Motor} from './motor';

export class MotorElectricoAdapter extends Motor {
    private motorElectrico:MotorElectrico;

    constructor() {
        super();
        console.log('Creando motor eléctrico adapter ...');
        this.motorElectrico = new MotorElectrico;
    }

    encender(): void {
        console.log('Encender motor electrico adapter.');
        this.motorElectrico.conectar();
        this.motorElectrico.activar();
    }
    acelear(): void {
        console.log('Acelarar motor eléctrico adapter.');
        this.motorElectrico.moverMasRapido();
    }
    apagar(): void {
        console.log('Apagando motor eléctrico adapter.');
        this.motorElectrico.detener();
        this.motorElectrico.desconectar();
    }


    
}