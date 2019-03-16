import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './builder/builder.component';
import { HomeComponent } from './home/home.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { SingletonComponent } from './singleton/singleton.component';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractFactoryComponent,
    BuilderComponent,
    HomeComponent,
    FactoryMethodComponent,
    PrototypeComponent,
    SingletonComponent,
    AdapterComponent,
    BridgeComponent,
    CompositeComponent,
    DecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
