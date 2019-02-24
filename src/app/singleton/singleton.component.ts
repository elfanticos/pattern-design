import { Component, OnInit } from '@angular/core';
import {Singleton} from './singleton';
import {Singleton2} from './singleton2';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.sass']
})
export class SingletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let myInstance = Singleton.getInstance(); 
    console.log('myInstance.temperature ',myInstance.temperature); // 0

    console.log('myInstance.temperature ', myInstance.temperature = 25); // 25
    console.log('myInstance.increaseTemperature ', myInstance.increaseTemperature()); // 26
    console.log('myInstance.increaseTemperature ', myInstance.increaseTemperature()); // 27
    console.log('myInstance.decreaseTemperature ', myInstance.decreaseTemperature()); // 26



    const myInstance2 = Singleton.getInstance();
    console.log('myInstance2.temperature ',myInstance2.temperature); // 26

    console.log(myInstance === myInstance2); // true
    setTimeout(() => {
      const myInstance3 = new Singleton2();
      
    }, 500);
  }

}
