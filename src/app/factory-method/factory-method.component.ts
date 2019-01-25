import { LavadoraCargoFrontalFactory } from './lavadoraCargoFrontalFactory';
import { Component, OnInit } from '@angular/core';
import { LavadoraFactory } from './lavadoraFactory';
import { Lavadora } from './lavadora';
import { LavadoraCargoSuperiorFactory } from './lavadoraCargoSuperiorFactory';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styles: []
})
export class FactoryMethodComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
      this.test_carga_frontral();
      
      this.test_carga_superior();
  }

  test_carga_frontral():void {
    let factory:LavadoraFactory = new LavadoraCargoFrontalFactory();

    let lavadora:Lavadora = factory.crea();

    console.log('tipoCarga ',lavadora.tipoCarga);
    console.log('tieneMandos ',lavadora.tieneMandos);
    console.log('tieneTambor ',lavadora.tieneTambor);
  }

  test_carga_superior():void {
    let factory:LavadoraFactory = new LavadoraCargoSuperiorFactory();

    let lavadora:Lavadora = factory.crea();

    console.log('tipoCarga ',lavadora.tipoCarga);
    console.log('tieneMandos ',lavadora.tieneMandos);
    console.log('tieneTambor ',lavadora.tieneTambor);
  }
}
