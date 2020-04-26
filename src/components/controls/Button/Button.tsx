import React from 'react';

type Props = {
    text?: string;
    className?: string;
}

const Button: React.FC<Props> = ({text, className}) => {
    return (
        <button type="button" className={className}>
            {text}
        </button>
    )
}

export { Button }