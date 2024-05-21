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