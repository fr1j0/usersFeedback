import styled from 'styled-components';

interface TextAreaProps {
    readonly error: boolean;
};

const TextArea = styled.textarea<TextAreaProps>`
    outline: none;
    padding: 10px;
    font-size: 14px;
    border: none;
    min-height: 90px;
    resize: none;
    transition: border 0.25s;
    border-left: ${props => props.error ? '4px solid rgba(255,0,0,.5)' : '0px solid rgba(255,0,0,.5)'}
`

export default TextArea;