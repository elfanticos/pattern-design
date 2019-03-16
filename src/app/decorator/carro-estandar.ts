import { Automovil } from './automovil';

export class CarroEstandar implements Automovil {
    private nombre:string;
     
    constructor(nombre:string) {
        this.nombre = nombre;
    }

    start(): void {
        console.log('Prendiendo el carro');
    }

    acell(): void {
        console.log('Aceleración estandar');
    }

    stop(): void {
        console.log('Frenar');
    }
}