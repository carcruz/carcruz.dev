import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { withContext } from 'react-dims';
import * as d3 from 'd3';

const defaultConfig = {
  w: 400,
  h: 40,
  w_small: 200,
  reactOps: { h: 40 / 5 - 1, y: 40 / 5 },
};

const SVGContainer = styled.svg``;
const RectElement = styled.rect``;

const StyledLink = styled(Link)`
  display: block;
`;

class Rect extends Component {
  constructor(props) {
    super(props);
    this.reactRef = React.createRef();
    this.state = {
      x: props.x,
      y: props.y,
      w: props.width,
    };
  }

  runAniamation(small) {
    setInterval(() => {
      if (document.hasFocus()) {
        const rW = d3.randomUniform(10, small ? 15 : 50)();
        const rX = d3.randomUniform(1, this.props.parentWidth - rW)();
        d3.select(this.reactRef.current)
          .transition()
          .duration(2000)
          .attr('width', rW)
          .attr('x', rX)
          .on('end', () => {
            this.setState({ x: rX, w: rW });
          });
      }
    }, 15000);
  }

  componentDidMount() {
    this.runAniamation();
  }

  render() {
    const { fill, height, y } = this.props;
    const { x, w } = this.state;
    return (
      <RectElement
        ref={this.reactRef}
        fill={fill}
        height={height}
        y={0}
        width={w}
        x={x}
        y={y}
      />
    );
  }
}

const AnimatedLogo = ({ dims, config = defaultConfig }) => {
  console.log(dims)
  // if (!dims.width) return null;
  return (
    <StyledLink to="/">
      <SVGContainer width={dims.width} height={config.h}>
        <Rect
          fill="#17B6E5"
          height={7}
          y={0}
          width={10}
          x={150}
          parentWidth={dims.width}
        />
        <Rect
          fill="#404041"
          height={7}
          y={config.reactOps.y}
          width={20}
          x={90}
          parentWidth={dims.width}
        />
        <Rect
          fill="#404041"
          height={7}
          y={config.reactOps.y * 2}
          width={30}
          x={50}
          parentWidth={dims.width}
        />
        <Rect
          fill="#404041"
          height={7}
          y={config.reactOps.y * 3}
          width={30}
          x={120}
          parentWidth={dims.width}
        />
        <Rect
          fill="#404041"
          height={7}
          y={config.reactOps.y * 4}
          width={50}
          x={0}
          parentWidth={dims.width}
        />
        <Rect
          fill="#404041"
          height={7}
          y={config.reactOps.y * 4}
          width={10}
          x={200}
          parentWidth={dims.width}
        />
      </SVGContainer>
    </StyledLink>
  );
};

export default withContext(AnimatedLogo);
