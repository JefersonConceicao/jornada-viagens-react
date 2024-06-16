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

    & p{
        line-height: 32px;
        font-size: 20px;
        font-weight: regular;
    }
`;

export const SectionTitle = styled.h2`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom:56px;

    &::after{
        content:"";
        display:block;
        margin-top:1rem;
        width:180px;
        height:4px;
        background: ${props => props.theme.red};
        text-align: center;
    }
`

export const ContainerGridOfertas = styled.section`
    display:grid;
    grid-template-columns: 588px 588px ;
    gap: 24px;
`

export const ContainerFlex  = styled.section`
    display:flex;
    gap:1.5rem;
`

export const ContainerCondicoesPagamento = styled.section`  
    display:grid;
    grid-template-columns: 384px 1fr;
    gap:1.43rem;
`
export const GridImagesPagamento = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1.5rem;
`
export const DescricaoPagamento = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    & h2{    
        font-size: 32px;
        margin-bottom:1.5rem;
    }
`;

export const ImagesPagamento = styled.img`
    width:100%;
    height: ${props => !!props.fill ? '182px' : 'auto'};
    grid-column: ${props => !!props.fill ? '1 / -1' : ''};
    object-fit: cover;

`