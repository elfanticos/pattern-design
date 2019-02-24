import { Color } from './../interfaces/color';
import { Figura } from '../interfaces/figura';

export class Rectangulo extends Figura {
    constructor(color:Color) {
        super(color);
    }

    dibujar():void {
        console.log('Dibujando rectangulo ...');
        this.color.pintar();
    }
}