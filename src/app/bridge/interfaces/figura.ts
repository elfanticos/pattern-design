import { Color } from './color';

export abstract class Figura {
    protected color:Color;

    constructor(color:Color) {
        this.color = color;
    }

    abstract dibujar():void;
}