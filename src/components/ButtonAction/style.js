import styled from "styled-components";

export const Button = styled.button` 
    padding: 1rem 1.56rem;
    border-radius: 8px;
    color: ${props => props.theme.white};
    background: ${props => props.theme.red};
    border:none;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.5s ease-in-out;

    &:hover{
        background: ${props => props.theme.grey};
    }
`;  