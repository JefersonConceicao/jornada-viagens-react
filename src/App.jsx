import { GlobalStyle, ContainerPrincipal } from './style';
import { ThemeProvider } from 'styled-components';
import {defaultTheme } from './style/theme/DefaultTheme'
import { Header } from './components/Header';
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
      </ThemeProvider>
    </>
  )
}

export default App
