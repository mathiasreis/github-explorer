import { GlobalStyle } from './styles/global'
import { SearchBar } from './components/SearchBar'
import { Container } from './styles/Home'
import { User } from './components/User'

function App() {
  return (
    <Container>
      <SearchBar />
      <User />
      <GlobalStyle />
    </Container>
  )
}

export default App;
