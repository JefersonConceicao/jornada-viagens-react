import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{ 
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
        color: #ffff;
    }
`

export const ContainerPrincipal = styled.main`
    width:100%;
    & img{
        width:100%;
        height:620px;
        object-fit: cover;
    }
`

export const Section = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:6.5rem auto;
    max-width: 1200px;

    & h2{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        margin-bottom:56px;

        &::after{
            content:"";
            display:block;
            width:180px;
            height:4px;
            background: ${props => props.theme.red};
            text-align: center;
        }
    }

    & p{
        line-height: 32px;
        font-size: 20px;
        font-weight: regular;
    }
`;

export const ContainerGrid = styled.div`
    display:grid;
    grid-template-columns: 588px 588px ;
    gap: 24px;


`