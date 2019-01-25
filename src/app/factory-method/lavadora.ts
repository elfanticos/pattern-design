export abstract class Lavadora {
    tieneTambor:boolean;
    tieneMandos:boolean;
    tipoCarga:string;
    
    ponerTambor():void {
        this.tieneTambor = true;
    }

    ponerMandos():void {
        this.tieneMandos = true;
    }
}