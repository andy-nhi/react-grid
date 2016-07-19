import React from 'react';
import * as ReactDOM from 'react-dom';
import * as SCSS from './sass/main.scss';

import SquareA from './js/components/square-a';
import SquareB from './js/components/square-b';
import SquareC from './js/components/square-c';
import SquareD from './js/components/square-d';

class App extends React.Component {
  render () {
    return (
        <div>
          <SquareA/>
          <SquareB/>
          <SquareC/>
          <SquareD/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
