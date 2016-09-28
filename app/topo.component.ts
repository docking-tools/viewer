import { Component, OnChanges } from '@angular/core';
@Component({
  selector: 'topo'
  template: '<h1>My First Angular App</h1>'
})

export class TopoComponent implements OnChanges {

ngOnChanges() {
d3.select(element[0])
    //this.logs.push('OnChanges called !?!?!?');
    //throw new Error('ngOnChanges called; should not be when ngDoCheck is defined!');
  }
}
