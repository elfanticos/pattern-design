import { Component, OnInit } from '@angular/core';
import { Persona, Builder } from './models/persona';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {
  // Obtener los objeto de persona dependiendo la edad
  padre:Persona;
  hijo:Persona;
  constructor() { }

  ngOnInit() {
    // this.padre = new Builder('Jhonatan')
    //                     .setMunicipio('Ate')
    //                     .setMayor(20,'Ate')
    //                     .build();
    // console.log(this.padre);

    this.padre = new Builder('Jhonatan')
                        .setMayor(28)
                        .setLugarTrabajo('Ate')
                        .build();

    console.log(this.padre);


    this.hijo = new Builder('Jmeza')
                        .setMenor(15)
                        .setColegio('Antunez de mayolo')
                        .build();
    console.log(this.hijo);
  }

}
