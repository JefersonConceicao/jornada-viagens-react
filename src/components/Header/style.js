import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    width:100%;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    height: 8.6rem;
    align-items: center;
    justify-content: space-between;
    padding:0 7.5rem;
`

export const LinksContainer = styled.nav`
    & ul {
        display:flex;
        gap: 2.5rem;
        list-style: none;
        align-items: center;
        & li {
            display:flex;
            align-items: center;
            gap:8px;
            color: ${props => props.theme.white};
        }
    }
`

export const BandeiraBrasil = styled.img`
    width: 2.6rem;
    height: 1.5rem;
`