import { Circulo } from './figures/circulo';
import { Azul } from './colors/azul';
import { Rectangulo } from './figures/rectangulo';
import { Component, OnInit } from '@angular/core';
import { Figura } from './interfaces/figura';
import { Negro } from './colors/negro';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.sass']
})
export class BridgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let figuras:Figura[] = [];
    figuras[0] = new Rectangulo(new Azul());
    figuras[1] = new Circulo(new Negro());
    figuras[2] = new Circulo(new Azul());

    for(let f of figuras) {
      f.dibujar();
    }
  }

}
