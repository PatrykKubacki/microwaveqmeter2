import React from 'react';
import { SweepSettings } from './SweepSettings/SweepSettings';
import { GraphActions } from './GraphActions/GraphActions';
import { Container, Row, Col } from 'react-grid-system';
import { NavBar } from './NavBar/NavBar';
import { Result } from './Result/Result';

const App: React.FC = () => {
  return (
    <>
    <NavBar />
    <h1>Microwave Q-Meter app </h1><br/><br/><br/>
    <Container fluid={true}>
      <Row>
        <Col xl={4} lg={4} xs={4} sm={4} md={4}>
          <SweepSettings />
        </Col>
      </Row>
      <Row>
        <Col xl={4} lg={4} xs={4} sm={4} md={4}>
          <GraphActions />
        </Col>
      </Row>
      <Row>
        <Col>
          <Result />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
