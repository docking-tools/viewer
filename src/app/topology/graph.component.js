"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var d3 = require('d3-selection');
var d3Force = require('d3-force');
var Graph = (function () {
    function Graph(element) {
        this.element = element;
        if (!this.element.nativeElement.offsetWidth) {
            this.element.nativeElement.offsetWidth = 300;
        }
        else {
            width = this.element.nativeElement.offsetWidth;
        }
        //if (!width=this.elementRef.nativeElement.offsetHeight;) {
        //     height = 300;
        // }
    }
    Graph.prototype.ngOnInit = function () {
        this.force = d3Force.forceSimulation(this.data);
        this.svg = d3.select(this.element.nativeElement)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);
        this.node = this.svg.selectAll(".node");
        this.link = this.svg.selectAll(".link");
    };
    __decorate([
        core_1.Input()
    ], Graph.prototype, "data");
    __decorate([
        core_1.HostBinding('style.height')
    ], Graph.prototype, "width");
    __decorate([
        core_1.HostBinding('style.height')
    ], Graph.prototype, "height");
    Graph = __decorate([
        core_1.Component({
            selector: 'graph',
            template: "\n    <div>\n      topo graph component\n    </div>\n  "
        })
    ], Graph);
    return Graph;
}());
exports.Graph = Graph;
