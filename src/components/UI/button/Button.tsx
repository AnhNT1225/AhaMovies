import React from 'react';

import './button.scss'
interface ButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}
const Button : React.FC<ButtonProps> = (props) => {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};


export const OutlineButton : React.FC<ButtonProps> = (props) => {
    return (
        <Button className={`btn-outline ${props.className}`} onClick={props.onClick}>
            {props.children}
        </Button>
    );
};
export default Button;