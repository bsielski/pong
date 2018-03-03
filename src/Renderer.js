import * as Pixi from 'pixi.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Renderer extends Component {

  constructor(props) {
    super(props);
    this.width = 600;
    this.height = 400;
  }

  componentDidMount() {
    this.app = new Pixi.Application(this.width, this.height);
    this.gameCanvas.appendChild(this.app.view);
    this.app.start();
  }

  componentWillUnmount() {
    this.app.stop();
  }

  render() {
    return (
      <div ref={(div) => {this.gameCanvas = div}} />
    );
  }
}

export default Renderer;
