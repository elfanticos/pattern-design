import { LavadoraCargoSuperior } from './lavadoraCargoSuperior';
import { LavadoraFactory } from "./lavadoraFactory";
import { Lavadora } from './lavadora';

export class LavadoraCargoSuperiorFactory extends LavadoraFactory {
    
    protected creaLavadora():Lavadora {
        return new LavadoraCargoSuperior();
    }


}