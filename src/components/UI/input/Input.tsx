import React from 'react';

import './input.scss'

interface InputProps {
    type: string;
    placeholdder: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input : React.FC<InputProps> = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholdder} value={props.value} onChange={props.onChange} />
    );
};

export default Input;