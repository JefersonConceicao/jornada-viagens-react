import { 
    GlobalStyle, 
    ContainerPrincipal, 
    Section,
    ContainerGrid
} from './style';

import { ThemeProvider } from 'styled-components';
import {defaultTheme } from './style/theme/DefaultTheme'

import { Header } from './components/Header';
import { CardViagem } from './components/CardViagem';

import principalBanner from './assets/principal_banner.svg';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={defaultTheme}>
          <Header/>
          <ContainerPrincipal> 
            <img src={principalBanner} alt="Homem remando em um lago" />
          </ContainerPrincipal>
          <Section>
              <h2> Boas vindas </h2> 
              <p> Somos uma agência apaixonada por criar viagens únicas e inesquecíveis para nossos clientes. 
                Com anos de experiência no setor de turismo, nossa equipe está mais do que preparada para ajudar 
                você a planejar a viagem dos seus sonhos.
              </p>
              <br/>
              <p>
                Da escolha do destino à seleção de acomodações, atividades e transporte, 
                cuidamos de todos os detalhes para que você aproveite ao máximo cada momento da sua jornada!
              </p>
          </Section>
          <Section> 
              <h2> Ofertas da Semana </h2>

              <ContainerGrid> 
                <CardViagem> 

                </CardViagem>
                <CardViagem> 
                  
                  </CardViagem>
                  <CardViagem> 
                  
                  </CardViagem>
                  <CardViagem> 
                  
                  </CardViagem>
              </ContainerGrid>
          </Section>
      </ThemeProvider>
    </>
  )
}

export default App
