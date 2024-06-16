import styled from 'styled-components';


export const Card = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 16px;
    color: ${props => props.theme.white};
    padding:1.5rem 0;
`

export const CardHeader = styled.header`
    margin-bottom:1.5rem;
    text-align: center;
    & h3{
        font-weight: bold;
        font-size: 2rem;
        margin-top: 0.5rem;
    }
`

export const CardBody = styled.main`
    margin-bottom:1.5rem;

    & h1{
        font-weight: bold;
        font-size: 48px;
    }
`

export const CardFooter = styled.footer`


`