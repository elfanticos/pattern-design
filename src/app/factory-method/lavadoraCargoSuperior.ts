import { Lavadora } from './lavadora';

export class LavadoraCargoSuperior extends Lavadora {
    constructor() {
        super();
        this.tipoCarga = 'superior';
    }
}