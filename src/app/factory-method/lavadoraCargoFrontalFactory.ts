import { LavadoraCargoFrontal } from './lavadoraCargoFrontal';
import { LavadoraFactory } from './lavadoraFactory';
import { Lavadora } from './lavadora';

export class LavadoraCargoFrontalFactory extends LavadoraFactory {
    
    protected creaLavadora(): Lavadora {
        return new LavadoraCargoFrontal();
    }

}