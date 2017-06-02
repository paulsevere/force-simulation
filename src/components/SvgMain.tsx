import * as React from 'react';
import { ForceLayout } from './ForceLayout'


class SvgMain extends React.Component<{}, null> {
  render() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    return (
      <svg width={width} height={height} viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`} className="main-svg" >
        <g transform="translate(1, -1)">
          <ForceLayout />

        </g>
      </svg>
    )
  }
}

export { SvgMain };