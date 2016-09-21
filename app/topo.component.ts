import { Component, onChanges } from '@angular/core';
@Component({
  selector: 'topo'
})

export class TopoCompoment implements onChanges {

ngOnChanges() {
    //this.logs.push('OnChanges called !?!?!?');
    //throw new Error('ngOnChanges called; should not be when ngDoCheck is defined!');
  }
}
