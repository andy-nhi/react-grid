import React from 'react';
import * as ReactDOM from 'react-dom';
import './sass/main.scss';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import SquareA from './js/components/square-a';
import SquareB from './js/components/square-b';
import SquareC from './js/components/square-c';
import SquareD from './js/components/square-d';

class App extends React.Component {
  render () {
    return (
        <Container fluid={true}>
          <Row>
            <Col md="6">
              <SquareA/>
            </Col>
            <Col md="3">
              <SquareB/>
            </Col>
            <Col md="2">
              <SquareC/>
            </Col>
            <Col md="1">
              <SquareD/>
            </Col>
          </Row>
        </Container>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
