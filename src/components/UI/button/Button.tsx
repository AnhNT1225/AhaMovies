import React from 'react';

import './button.scss'
interface IButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}
const Button : React.FC<IButtonProps> = (props) => {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};


export const OutlineButton : React.FC<IButtonProps> = (props) => {
    return (
        <Button className={`btn-outline ${props.className}`} onClick={props.onClick}>
            {props.children}
        </Button>
    );
};
export default Button;