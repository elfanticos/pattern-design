import { Component, OnInit } from '@angular/core';
import { Automovil } from './automovil';
import { CarroEstandar } from './carro-estandar';
import { AutoElectricoFeature } from './automovil-electrico-feature';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.sass']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let carro:Automovil = new CarroEstandar('Chevy');
    carro = new AutoElectricoFeature(carro);
    carro.start();
    carro.acell();
    carro.stop();
  }

}
