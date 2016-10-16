import { Component, ElementRef, Input, HostBinding } from '@angular/core';
import * as data from './data';
import * as d3 from 'd3-selection';
import * as d3Force from 'd3-force';
import * as d3Drag from 'd3-drag';

@Component({
  selector: 'graph',
  template: `
    <div>
      topo graph component
    </div>
  `
})
export class Graph {

  //  @Input()
    private data: any;
    private svg: any;
    private nodesLinkSimulation: d3Force.Simulation<data.SimNode, data.SimLink>;

    // Component size
    private _width:number;
    private _height:number;
    
    // Node size
     @Input('nodeSize')nodeSize: number = 50;
    
    private node: any;
    private link: any;

    constructor(private element:ElementRef ) {
        this._width = this.element.nativeElement.clientWidth 
        if ( this._width==0) {
            this._width =  500;

        }
        this._height = this.element.nativeElement.clientHeight 
        if (this._height== 0) {
            this._height=350;
        }
        this.data = JSONData
    }   
    
    ngOnInit() {


        // Init svg element
        this.svg = d3.select(this.element.nativeElement)
            .append("svg")
            .attr("width", this._width)
            .attr("height", this._height);


        let forceCharge: d3Force.ForceManyBody<data.SimNode>;
        forceCharge = d3Force.forceManyBody<data.SimNode>();
        forceCharge = forceCharge.strength(-2000).theta(0.1).distanceMin(100);


        this.nodesLinkSimulation = d3Force.forceSimulation<data.SimNode, data.SimLink>()
            .force("link", d3Force.forceLink().id(function(d:data.SimNode) { return d.id; }))
            .force("charge", forceCharge )
            .force("center", d3Force.forceCenter(this._width / 2, this._height / 2));
            
        
        

        this.updateNode();
    }

    updateNode() {

        this.link = this.svg
            .selectAll(".link")
            .data(this.data.links)
            .enter().append("line")
            .attr("class", "link");
        this.link.exit().remove();

      //  var node = this.svg.selectAll(".node")
    //        .data(this.data.nodes);
        
        this.node = this.svg.selectAll(".node")
            .data(this.data.nodes).enter().append("g")
            .attr("class", "node")
            .attr("node_name", function(d) { return d.name; })
            .attr("node_id", function(d) { return d.id; });


        var nodeEnter = this.node.append("image")
            .attr("xlink:href", function(d) { return "assets/img/securitygroup-green.svg"; })
            .attr("id", function(d){ return "image_"+ d.name; })
            .attr("width", this.nodeSize)
            .attr("height", this.nodeSize);
        this.node.exit().remove();
        nodeEnter.append("title")
            .text(function(d) { return d.name; });    


        this.nodesLinkSimulation
            .nodes(this.data.nodes)
            .on("tick", this.tick);            

        this.nodesLinkSimulation.force<d3Force.ForceLink<data.SimNode, data.SimLink>>("link")
            .links(this.data.links);
            
        this.node.call(this.nodesLinkSimulation.force);

    }
    
    public getWidth = () => {
        return this._width;
    }
    
    
    protected tick = () => {
                //   node
                //          .attr("cx", function(d) { return d.x = d.x; })
                //          .attr("cy", function(d) { return d.y = d.y; });
                this.node.attr("transform", this.nodeTick);
                //node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                    var x1 = (d) => { return d.source.x + this.nodeSize / 2; };
                    var y1 = (d) => { return d.source.y + this.nodeSize / 2; };
                    var x2 = (d) => { return d.target.x + this.nodeSize / 2; };
                    var y2 = (d) => { return d.target.y + this.nodeSize / 2; };
                   this.link.attr("x1", x1)
                            .attr("y1", y1)
                            .attr("x2", x2)
                            .attr("y2", y2);

                 
    }
    
    protected nodeTick = (d) => {
        
        return "translate(" + Math.max(this.nodeSize,Math.min(this._width - this.nodeSize, d.x)) + "," + Math.max(this.nodeSize,Math.min(this._height - this.nodeSize, d.y)) + ")"; 
    }
}

const JSONData = {
    "nodes": [
        {"id": "1", "name": "volumeFlocker1", "type": "volume-flocker"},
        {"id": "2", "name": "container1", "type": "container"},
        {"id": "3", "name": "container2", "type": "container"},
        {"id": "4", "name": "volumeLocal", "type": "volume-local" }
        
        ],
    "links":[
                {"source":"1", "target":"2", "value":"link1"},
                {"source":"1", "target":"3", "value":"link2"},
                {"source":"2", "target":"4", "value":"link3"}
            ]
}
