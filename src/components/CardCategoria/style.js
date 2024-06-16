import styled  from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1.5rem;
    border-radius: 8px;
    background: ${props => props.theme.silver};
    padding:1.5rem 1rem;
    cursor:pointer;
    transition: box-shadow 0.5s ease-in-out;

    &:hover{
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
`

export const CardIcon = styled.img`
    width:80px;
    height:80px;
`

export const CardTitle = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`