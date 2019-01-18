// import { Component, OnInit } from '@angular/core';
// import { FactoryRelacional } from './models/factory-relacional';
// import { FactoryNoSql } from './models/factory-no-sql';

// @Component({
//   selector: 'app-abstract-factory',
//   templateUrl: './abstract-factory.component.html',
//   styles: []
// })
// export class AbstractFactoryComponent implements OnInit {
//   // Factory para obtener que tipo de conección
//   factoryRelacional = new FactoryRelacional();
//   factoryNoSql = new FactoryNoSql();
  
//   constructor(
//   ) { }

//   ngOnInit() {
//     let repoNoSql = this.factoryNoSql.createRepositorioAlumnos();
//     console.log(repoNoSql.listaAlumnos());

//     let repoRelacional = this.factoryRelacional.createRepositorioAlumnos();
//     console.log(repoRelacional.listaAlumnos());

//   }
// }


import { Component, OnInit } from '@angular/core';
import { MensajesAbstractFactory } from './mensajes/mensajes-abstract-factory';
import { MensajesEsFactory } from './mensajes/mensajes-es-factory';
import { MensajesEnFactory } from './mensajes/mensajes-en-factory';
import { Preguntas } from './mensajes/factory/preguntas/preguntas';
import { Saludos } from './mensajes/factory/saludos/saludos';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styles: []
})
export class AbstractFactoryComponent implements OnInit {
  // Factory mostrar el tipo de mensaje
  mensajeFactoryEs:MensajesAbstractFactory = new MensajesEsFactory();
  mensajeFactoryEn:MensajesAbstractFactory = new MensajesEnFactory();
  
  constructor(
  ) { }

  ngOnInit() {
    // Preguntas
    let preguntaEs :Preguntas = this.mensajeFactoryEs.getPreguntas();
    console.log('PREGUNTAS------ Español');
    console.log(preguntaEs.preguntarHora());
    console.log(preguntaEs.preguntarTiempo());

    //Saludos
    let saludosEN:Saludos = this.mensajeFactoryEn.getSaludos();
    console.log('SALUDOS ------- Ingles');
    console.log(saludosEN.buenosDias());
    console.log(saludosEN.buenasTardes());

  }
}
