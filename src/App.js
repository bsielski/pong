import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Renderer from './Renderer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.mainMapContainer = document.getElementById('main_map');
  }

  componentDidMount() {
    ReactDOM.render(<Renderer />, this.mainMapContainer);
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.mainMapContainer);
  }

  render() {
    return null;
  }
}

export default App;
