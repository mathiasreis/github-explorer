import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { SearchBar } from "./components/SearchBar";
import { Container } from "./styles/Home";
import { User } from "./components/User";
import { ReposList } from "./components/ReposList";

function App() {
  /*const user = {
    name: 'Alexsander Reis',
    login: 'mathiasreis',
    bio: 'Bio do usuário',
    avatar_url: 'https://github.com/mathiasreis.png'
  }*/

  const [user, setUser] = useState();
  const [userRepos, setUserRepos] = useState();
  const [isReposListActive, setIsReposListActive] = useState(false);

  return (
    <Container>
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />

      {isReposListActive
        ? userRepos && (
            <ReposList
              user={user}
              userRepos={userRepos}
              setIsReposListActive={setIsReposListActive}
            />
          )
        : user && (
            <User
              user={user}
              userRepos={userRepos}
              setIsReposListActive={setIsReposListActive}
            />
          )}
      <GlobalStyle />
      {/* {user && <User user={user} userRepos={userRepos} />}
      {userRepos && <ReposList user={user} userRepos={userRepos} />} */}
    </Container>
  );
}

export default App;
