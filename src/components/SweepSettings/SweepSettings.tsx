import React from 'react';
import { Card } from '../Card/Card';
import { Input } from '../controls';
import './SweepSettings.css'

const SweepSettings: React.FC = () => {
    return (
        <Card header={'Sweep settings'}>
            <Input label="Start [MHz]" inputClassName={'input'}/><br/>
            <Input label="Stop [MHz]" inputClassName={'input'}/><br/>
            <Input label="Points on screen" inputClassName={'input'}/><br/>
        </Card>
    )
}

export { SweepSettings };