import { Component, OnInit } from '@angular/core';
import { Prototype } from './prototype';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html'
})
export class PrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let name = new Prototype('Jhonatan','Meza');
    name.display();
    let clone = name.clone();
    clone.SetApellido = 'Inca';
    clone.display();


    console.log('prototipos');
    name.display();
    clone.display();
    
  }

}
