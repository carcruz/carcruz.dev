import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import * as d3 from 'd3';
import './style.css';

class AnimatedLogo extends Component {
  canvasOps = { w: this.props.w, h: 40 || this.props.h };
  reactOps = { h: this.canvasOps.h / 5 - 1, y: this.canvasOps.h / 5 };
  brandColor = '#17B6E5';
  darkColor = '#404041';
  canvas;
  blueRect;
  oneRect;
  twoRect;
  threeRect;
  fourRect;
  fiveRect;

  runAniamation(rect, small) {
    return setInterval(() => {
      if (document.hasFocus()) {
        const rW = d3.randomUniform(10, small ? 15 : 50)();
        const rX = d3.randomUniform(1, this.canvasOps.w - rW)();
        rect
          .transition()
          .duration(2000)
          .ease(d3.easeQuadIn)
          .attr('width', rW)
          .attr('x', rX);
      }
    }, 3000);
  }

  createCanvas() {
    this.canvas = d3
      .select('#logo')
      .append('svg')
      .attr('height', this.canvasOps.h)
      .attr('width', this.canvasOps.w);
  }

  async componentDidMount() {
    await this.createCanvas();

    this.blueRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', this.props.w * 0.14)
      .attr('y', this.reactOps.y * 0)
      .attr('x', 150)
      .attr('fill', this.brandColor);
    this.oneRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', 20)
      .attr('y', this.reactOps.y)
      .attr('x', 90)
      .attr('fill', this.darkColor);
    this.twoRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', 30)
      .attr('y', this.reactOps.y * 2)
      .attr('x', 50)
      .attr('fill', this.darkColor);
    this.threeRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', 30)
      .attr('y', this.reactOps.y * 3)
      .attr('x', 120)
      .attr('fill', this.darkColor);
    this.fourRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', 50)
      .attr('y', this.reactOps.y * 4)
      .attr('x', 0)
      .attr('fill', this.darkColor);
    this.fiveRect = this.canvas
      .append('rect')
      .attr('height', this.reactOps.h)
      .attr('width', 10)
      .attr('y', this.reactOps.y * 4)
      .attr('x', 200)
      .attr('fill', this.darkColor);

    const blueRectInt = this.runAniamation(this.blueRect);
    const oneRectInt = this.runAniamation(this.oneRect);
    const twoRectInt = this.runAniamation(this.twoRect);
    const threeRectInt = this.runAniamation(this.threeRect);
    const fourRectInt = this.runAniamation(this.fourRect);
    const fiveRectInt = this.runAniamation(this.fiveRect, true);
  }

  render() {
    return (
      <Link to="/">
        <div id="logo_component">
          <div id="logo" />
          {!this.props.noDesc ? <Description /> : null}
        </div>
      </Link>
    );
  }
}

const Description = () => (
  <Fragment>
    <h5>CARLOS CRUZ CASTILLO</h5>
    <p>WEB DEVELOPER</p>
  </Fragment>
);

AnimatedLogo.defaultProps = {
  w: 210,
};

const ProvicionalLogo = styled.span`
  font-size: 18px;
  font-family: 'Inconsolata';
  text-decoration: none;
  color: #17b6e5;
`

export default ProvicionalLogo;
