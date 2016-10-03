import { Directive, Input, ElementRef, Attribute, SimpleChange } from '@angular/core';
import * as d3 from 'd3';

 @Directive({

   selector: 'topo-graph',

})
@Injectable()
export class TopoGraph
{

  //Container
  private width: number = 960;
  private height: number = 500;


  // Graph
  private graph: any;	// Data graph
  private force: d3.layout.Force<d3.layout.force.Link<d3.layout.force.Node>, d3.layout.force.Node>;
  private links: d3.Selection<d3.layout.force.Link<d3.layout.force.Node>>;
  private nodes: d3.Selection<d3.layout.force.Node>;
  private svg: d3.Selection<any>;

  private _data: any;	// data chart


  // Attributes
  private node: any;
  private link: any;

  @Input() set data(data: string) {
	this.data = data;
  }

  constructor ( elementRef: ElementRef, @Attribute('width') width: number, @Attribute('height') height:number  ) 
  {
	let el: any    	= elementRef.nativeElement;  // reference to <topo-graph> element from the main template
	this.graph = json


	// Init Canvas Graph
	this.force = d3.layout.force() 
		.gravity(0.1)
		.charge(-2000)
		.linkDistance(100)
		.size([width, height]);


	this.svg = this.graph.append("svg")
		.attr('width', width)
		.attr('height', height);

	this.nodes = this.svg.selectAll('.node')
	this.links = this.svg.selectAll('.link');

	

	// Init Graph data
	this.force.nodes(this.graph.nodes)
		.links(this.graph.links);
	

  }

  public update() {
	let node: any = this.node.data(this.nodes);
	let link: any = this.link.data(this.links);

	let nodeEnter = node.enter().append("g")
		.attr("class", "node")
		.attr("node_name", (n: any) => { return n.name })
		.attr("node_id", (n: any) => { return n.id })
		.call(this.force.drag);

	node.exit().remove();

	this.force.start();
  }


}

var json = {
	"nodes": [
		{"name":"node1", "id":"node1"},
		{"name":"node2", "id":"node2"}
	]
}
