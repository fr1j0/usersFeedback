import styled from 'styled-components';

interface InputProps {
    readonly minLength?: number;
    readonly error: boolean;
};

const Input = styled.input<InputProps>`
    outline: none;
    padding: 10px;
    font-size: 14px;
    border: none;
    transition: border 0.25s;
    border-left: ${props => props.error ? '4px solid rgba(255,0,0,.5)' : '0px solid rgba(255,0,0,.5)'}
`

export default Input;