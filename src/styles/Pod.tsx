import styled, { css } from 'styled-components';

interface PodProps {
    readonly shadowed?: boolean;
};

const Pod = styled.div<PodProps>`
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #f3f3f3;
    max-width: 50vw;
    color: rgb(85,85,85);
    width: 300px;
    height: 360px;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 0 10px;
    overflow: hidden;
    ${props => props.shadowed && css`box-shadow: 0px 0px 40px 4px rgba(0,0,0,.2);`}
    h1{
        font-size: 25px;
    }
    .row{
        display: flex;
        justify-content: center;
        margin: 10px 0;
        input[type=text], 
        input[type=email], 
        textarea{ 
            flex: 1;
            color: rgb(100,100,100);
        }
    }
`;

export default Pod;