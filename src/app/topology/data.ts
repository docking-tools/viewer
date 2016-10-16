import * as d3Force from 'd3-force';

export interface SimNode extends d3Force.SimulationNodeDatum {
    id: string;
    group: number;
    r: number;
}

export interface SimLink extends d3Force.SimulationLinkDatum<SimNode> {
    value: number;
    target: number;
    source: number;
}