import { Automovil } from './automovil';
import { extend } from 'webdriver-js-extender';

export abstract class AutomovilDecorator extends Automovil{
    
    private automovil:Automovil;

    constructor(automovil:Automovil) {
        super();
        this.automovil = automovil;
    }

    protected getAuto():Automovil {
        return this.automovil;
    }
}