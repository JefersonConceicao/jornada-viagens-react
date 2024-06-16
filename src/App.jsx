import { 
    GlobalStyle, 
    ContainerPrincipal, 
    Section,
    ContainerGridOfertas,
    ContainerFlex,
    SectionTitle,
    ContainerCondicoesPagamento,
    DescricaoPagamento,
    GridImagesPagamento,
    ImagesPagamento
} from './style';

import { ThemeProvider } from 'styled-components';
import {defaultTheme } from './style/theme/DefaultTheme'

import { Header } from './components/Header';
import { CardViagem } from './components/CardViagem';
import { CardCategoria } from './components/CardCategoria';
import { DestinoPopular } from './components/DestinoPopular';

import principalBanner from './assets/principal_banner.svg';
import backgroundCards from './assets/card_images/background_image_card.svg'
import imageCategoria from './assets/cards_categorias/ícone - pacotes nacionais.svg';

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
              <SectionTitle> Boas vindas </SectionTitle> 
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
              <SectionTitle> Ofertas da Semana </SectionTitle>
              <ContainerGridOfertas> 
                  <CardViagem 
                    tipo="HOTEL+AEREO"
                    pais="Japão"
                    valor="R$ 4.0000"
                    image={backgroundCards}
                  /> 
                  <CardViagem 
                  tipo="HOTEL+AEREO"
                  pais="Japão"
                  valor="R$ 4.0000"
                  image={backgroundCards}
                /> 
                  <CardViagem 
                  tipo="HOTEL+AEREO"
                  pais="Japão"
                  valor="R$ 4.0000"
                  image={backgroundCards}
                /> 
                  <CardViagem 
                  tipo="HOTEL+AEREO"
                  pais="Japão"
                  valor="R$ 4.0000"
                  image={backgroundCards}
                /> 
              </ContainerGridOfertas>
          </Section>
          <Section> 
            <SectionTitle> Busque por Categoria </SectionTitle>
            <ContainerFlex> 
              <CardCategoria image={imageCategoria} title="Pacotes Nacionais"/>
              <CardCategoria image={imageCategoria} title="Pacotes Internacionais"/>
              <CardCategoria image={imageCategoria} title="Hotéis e Hospedagens"/>
              <CardCategoria image={imageCategoria} title="Bagagem Extra"/>
            </ContainerFlex>
          </Section>

          <Section> 
            <SectionTitle> Destinos Populares </SectionTitle>
            <ContainerFlex>
              <DestinoPopular 
                image={backgroundCards}
                descricao="
                  Tóquio é uma cidade vibrante e cosmopolita, 
                  com seus templos históricos, 
                  museus de arte moderna e arranha-céus icônicos. 
                  Não perca a chance de mergulhar em sua atmosfera fascinante.
                "  
              />
              
              <DestinoPopular 
                image={backgroundCards}
                descricao="
                  Tóquio é uma cidade vibrante e cosmopolita, 
                  com seus templos históricos, 
                  museus de arte moderna e arranha-céus icônicos. 
                  Não perca a chance de mergulhar em sua atmosfera fascinante.
                "  
              />
            </ContainerFlex>
          </Section>
          <Section> 
            <SectionTitle> Condições de Pagamento </SectionTitle>
            <ContainerCondicoesPagamento>
              <DescricaoPagamento>
                <h2>Parcelamento <br/> em até 12x! </h2>
                
                <p> 
                  Viaje pagando em até 12 parcelas no cartão,
                  à vista no crédito com 5% de desconto ou no Pix 
                  com 10% de desconto! 
                </p>

              </DescricaoPagamento> 
              <GridImagesPagamento> 
                  <ImagesPagamento src={backgroundCards} />
                  <ImagesPagamento src={backgroundCards} />
                  <ImagesPagamento src={backgroundCards} fill="true"/>
              </GridImagesPagamento>
            </ContainerCondicoesPagamento>
          </Section>

          <Section> 
            <SectionTitle> Depoimentos </SectionTitle>
          </Section>
      </ThemeProvider>
    </>
  )
}

export default App
