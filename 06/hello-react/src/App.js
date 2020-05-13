import React, { Component, Fragment } from 'react';
import IterationSample from './IterationSample';
import IterationSample2 from './IterationSample2';

class App extends Component {
  render() {
    return (
      <Fragment>
      <h3>IterationSample</h3>
        <IterationSample />
        <hr/>
        <h3>IterationSample2</h3>
        <IterationSample2/>
      </Fragment>

    );
  }
}
export default App;
