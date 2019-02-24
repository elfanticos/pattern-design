import { Color } from './../interfaces/color';
import { Figura } from '../interfaces/figura';

export class Circulo extends Figura {
    constructor(color:Color) {
        super(color);
    }

    dibujar():void {
        console.log('Dibujando circulo ...');
        this.color.pintar();
    }
}