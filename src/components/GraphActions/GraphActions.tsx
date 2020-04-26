import React from 'react';
import { Card } from '../Card/Card';
import { Button } from '../controls';
import './GraphActions.css';

const GraphActions: React.FC = () => {
    return (
        <Card header={'Graph actions'}>
            <div className={'button-wrapper'}>
                <Button text={'Autocenter'} className={'button-wrapper-button'}/>
                <Button text={'Autoscale'} className={'button-wrapper-button'}/>
                <Button text={'Un-zoom full'} className={'button-wrapper-button'}/>
            </div>
        </Card>
    )
}

export { GraphActions };