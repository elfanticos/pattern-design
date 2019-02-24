import {Motor} from './motor';

export class MotorEconomico extends Motor {

    constructor() {
        super();
        console.log('Creando un motor economico...');
    }

    encender(): void {
        console.log('Encender motor economico');
    }
    acelear(): void {
        console.log('Acelarar motor economico');
    }
    apagar(): void {
        console.log('Apagando motor economico');
    }


}