import { HeaderContainer, LinksContainer, BandeiraBrasil } from "./style"
import logoBrancaJornadaViagens  from '../../assets/logo_branca_jornada.png';
import bandeiraBrasil from '../../assets/bandeira_brasil.svg';

export function Header(){
    return (
        <HeaderContainer> 
            <img src={logoBrancaJornadaViagens} alt=""/> 

            <LinksContainer>
                <ul> 
                    <li> <a href="#blog"> Blog </a> </li>
                    <li> <a href="#pacoteViagens"> Pacotes de Viagens </a> </li>
                    <li>   
                        <BandeiraBrasil src={bandeiraBrasil} alt=""/>    
                        <a href="#lingua"> 
                            <span> 
                                Português 
                            </span>
                        </a> 
                    </li>
                    <li> 
                        <a href="#Contato"> Contato </a> 
                    </li>
                </ul>
            </LinksContainer> 
        </HeaderContainer>
    )
}