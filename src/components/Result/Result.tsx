import React from 'react';
import { Card } from '../Card/Card';
import { Container, Row, Col } from 'react-grid-system';
import { Input } from '../controls';
import './Result.css';

const Result: React.FC = () => {
    return (
        <Card header={'Result'}>
            <Container fluid={true}>
                <Row>
                    <Col xl={4} lg={4} xs={4} sm={4} md={4}>
                        <div><strong>Q Factor = </strong></div>
                        <div><strong>Center frequency difference [MHz] = </strong></div>
                        <div>Center frequency [MHz] =</div>
                        <div>3-dB bandwidth [MHz] = </div>
                        <div>Peak transmittance [dB] = </div>
                        <div>Number of points = </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4} xs={4} sm={4} md={4}>
                        <h3>Empty resonator:</h3>
                        <button>Measure the empty resonator</button><br/><br/>
                        <Input label={'Q Factor'} inputClassName={'input'}/><br/>
                        <Input label={'Center frequency [MHz]'} inputClassName={'input'}/><br/>
                        <Input label={'Peak transmittance [dB]'} inputClassName={'input'}/><br/>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export { Result }