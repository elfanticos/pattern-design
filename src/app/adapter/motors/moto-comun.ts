import {Motor} from './motor';

export class MotorComun extends Motor {

    constructor() {
        super();
        console.log('Creando un motor comun...');
    }

    encender(): void {
        console.log('Encender motor comun');
    }
    acelear(): void {
        console.log('Acelarar motor comun');
    }
    apagar(): void {
        console.log('Apagando motor comun');
    }


}