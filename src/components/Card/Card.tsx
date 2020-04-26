import React from 'react';
import './Card.css';

type Props = {
    header?: string;
}

const Card: React.FC<Props> = ({header, children}) => {
    return (
    <div className={'self'}>
        <h2>{header}</h2>
        {children}
    </div>
    )
}

export { Card }