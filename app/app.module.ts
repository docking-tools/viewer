import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } 	from './app.component';

import { TopoComponent }	from './topo.component';
import { TopoGraph }		from './directive/topo';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopoComponent, TopoGraph ],
  bootstrap:    [ AppComponent, TopoComponent ]
})
export class AppModule { }

