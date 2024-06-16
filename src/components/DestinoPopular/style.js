import styled from 'styled-components';
import { Button } from '../ButtonAction/style';

export const CardDestino = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:1.5rem;

    & h2{
        font-size: 32px;
        font-weight: bold;
    }
`;

export const ImageDestino = styled.img`
    border-radius: 8px;
    width: 36.75rem;
    height: 28.25rem;
    object-fit: cover;
`;

export const DestinoDescricao = styled.p`
    font-size: 20px;
    font-weight: regular;
    line-height: 32px;

`

export const ButtonActionDestinos = styled(Button)`
    width: auto;
`