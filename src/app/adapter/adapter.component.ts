import { MotorElectricoAdapter } from './motors/motor-electrico-adapter';
import { MotorEconomico } from './motors/motor-economico';
import { MotorComun } from './motors/moto-comun';
import { Component, OnInit } from '@angular/core';
import { Motor } from './motors/motor';


enum typeMotor{
  COMUN,
  ECONOMICO,
  ELECTRICO,
  CERRANDO
}

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.sass']
})
export class AdapterComponent implements OnInit {
  private pedido_motor:number = null;
  private static motor:Motor;


  ngOnInit() {
    this.pedido_motor = typeMotor.ELECTRICO;

    switch (this.pedido_motor) {
      case typeMotor.COMUN:
        AdapterComponent.motor = new MotorComun();
        this.usarMotor();
        break;
      case typeMotor.ECONOMICO:
      AdapterComponent.motor = new MotorEconomico();
      this.usarMotor();
        break;
      case typeMotor.ELECTRICO:
        AdapterComponent.motor = new MotorElectricoAdapter();
        this.usarMotor();
        break;
        case typeMotor.CERRANDO:
        console.log('Cerrando programa');
        break;
      default:
        console.log('La acción ingresada no es valida');
        break;
    }
  }

  usarMotor():void {
    AdapterComponent.motor.encender();
    AdapterComponent.motor.acelear();
    AdapterComponent.motor.apagar();
  }
  
}
