import { Lavadora } from './lavadora';

export abstract class LavadoraFactory {
    
    crea():Lavadora {
        let lavadora:Lavadora = this.creaLavadora();
        lavadora.ponerMandos();
        lavadora.ponerTambor();

        return lavadora;
    }

    protected abstract creaLavadora():Lavadora;
}