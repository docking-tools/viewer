"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var d3 = require('d3');
var TopoGraph = (function () {
    function TopoGraph(elementRef, width, height) {
        //Container
        this.width = 960;
        this.height = 500;
        var el = elementRef.nativeElement; // reference to <topo-graph> element from the main template
        this.graph = json;
        // Init Canvas Graph
        this.force = d3.layout.force()
            .gravity(0.1)
            .charge(-2000)
            .linkDistance(100)
            .size([width, height]);
        this.svg = this.graph.append("svg")
            .attr('width', width)
            .attr('height', height);
        this.nodes = this.svg.selectAll('.node');
        this.links = this.svg.selectAll('.link');
        // Init Graph data
        this.force.nodes(this.graph.nodes)
            .links(this.graph.links);
    }
    Object.defineProperty(TopoGraph.prototype, "data", {
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    TopoGraph.prototype.update = function () {
        var node = this.node.data(this.nodes);
        var link = this.link.data(this.links);
        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("node_name", function (n) { return n.name; })
            .attr("node_id", function (n) { return n.id; })
            .call(this.force.drag);
        node.exit().remove();
        this.force.start();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], TopoGraph.prototype, "data", null);
    TopoGraph = __decorate([
        core_1.Directive({
            selector: 'topo-graph',
        }),
        __param(1, core_1.Attribute('width')),
        __param(2, core_1.Attribute('height')), 
        __metadata('design:paramtypes', [core_1.ElementRef, Number, Number])
    ], TopoGraph);
    return TopoGraph;
}());
exports.TopoGraph = TopoGraph;
var json = {
    "nodes": [
        { "name": "node1", "id": "node1" },
        { "name": "node2", "id": "node2" }
    ]
};
//# sourceMappingURL=topo.js.map