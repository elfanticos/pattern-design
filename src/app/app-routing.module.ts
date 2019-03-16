import { CompositeComponent } from './composite/composite.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrototypeComponent } from './prototype/prototype.component';

// Componentes
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './builder/builder.component';
import { HomeComponent } from './home/home.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import {SingletonComponent} from './singleton/singleton.component';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { DecoratorComponent } from './decorator/decorator.component';

const routes: Routes = [
  {path : 'abstract_factory' , component : AbstractFactoryComponent},
  {path : 'builder'          , component : BuilderComponent},
  {path : 'factory-method'   , component : FactoryMethodComponent},
  {path : 'prototype'        , component : PrototypeComponent},
  {path : 'singleton'        , component : SingletonComponent},
  {path : 'adapter'          , component : AdapterComponent},
  {path : 'bridge'           , component : BridgeComponent},
  {path : 'composite'        , component : CompositeComponent},
  {path : 'decorator'        , component : DecoratorComponent},
  {path : ''                 , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
