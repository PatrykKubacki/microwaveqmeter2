import React from 'react';
import './Input.css';

type Props = {
    label?: string;
    inputClassName?: string;
}

const Input: React.FC<Props> = ({label, inputClassName}) => {
    return (
        <div>
            <label>{label}</label>
            <input 
             className={inputClassName}
             type="text"
             onChange={() => null}
             />
        </div>
    )
}

export { Input }