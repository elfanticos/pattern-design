export class MotorElectrico {
    private conectado:boolean = false;

    constructor() {
        console.log('Creando motor electrico');
        this.conectado = true;
    }

    conectar():void {
        console.log('Conectando motor electrico');
        this.conectado = true;
    }

    activar():void {
        if (!this.conectado) {
            console.log('No se puede activar por que no esta conectado el motor electrico');
        } else {
            console.log('Está, conectado, activando motor electrico.');
        }
    }

    moverMasRapido():void {
        if (!this.conectado) {
            console.log('No se puede mover rapido el motor eléctrico porque no está conectado');
        } else {
            console.log('Moviendo más rapido, aumentando voltaje del motor eléctrico');
        }
    }

    detener():void {
        if (!this.conectado) {
            console.log('No se puede detener el motor eléctrico porque no esta conectado');
        } else {
            console.log('Deteniendo motor eléctrico');
        }
    }

    desconectar():void {
        console.log('Desconectando motor eléctrico');
        this.conectado = false;
    }
}