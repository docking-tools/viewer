import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } 	from './app.component';
import { TopoComponent }	from './topo.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopoComponent ],
  bootstrap:    [ AppComponent, TopoComponent ]
})
export class AppModule { }

