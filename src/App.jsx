import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { SearchBar } from './components/SearchBar'
import { Container } from './styles/Home'
import { User } from './components/User'

function App() {
  /*const user = {
    name: 'Alexsander Reis',
    login: 'mathiasreis',
    bio: 'Bio do usuário',
    avatar_url: 'https://github.com/mathiasreis.png'
  }*/

  const [user, setUser] = useState()
  const [userRepos, setUserRepos] = useState();

  return (
    <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />
      { user && <User user={user} userRepos={userRepos} />}
      <GlobalStyle />
    </Container>
  )
}

export default App;
