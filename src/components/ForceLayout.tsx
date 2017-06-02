import * as React from 'react';
import * as d3 from 'd3-force';
import { Node } from '../simulation/Node'








class ForceLayout extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      nodes: Array(10).fill(Node())
    }
  }
  componentWillMount() {
    let simulation = d3.forceSimulation(this.state.nodes).force("charge", d3.forceManyBody());
    (window as any).f = simulation;
  }
  render() {
    return (
      <g>
      </g>
    )
  }
}

export { ForceLayout }