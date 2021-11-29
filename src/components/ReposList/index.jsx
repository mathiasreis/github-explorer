import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { ItemReposList } from '../ItemReposList'

export function ReposList({ user, userRepos, setIsReposListActive }) {
  return (
    <Container>
      <div>
        <button type="button" onClick={() => setIsReposListActive(false)}>
          <FiArrowLeft />
          Voltar
        </button>
        { user && <h1>Repositorios de {user.name}</h1>}
        
      </div>

      

      <ul>
        {userRepos.map((repo) => (
          <ItemReposList key={repo.id} banana={repo} />
      ))}
      </ul>
    </Container>
  );
}

/*
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { UserRepos } from "../UserRepos";

export function ReposList({ user, userRepos, setIsReposListActive }) {
  return (
    <Container>
      <div>
        <button type="button" onClick={() => setIsReposListActive(false)}>
          <FiArrowLeft />
          Voltar
        </button>
        <h1>Repositorios de {user.name}</h1>
      </div>

      <UserRepos userRepos={userRepos} />
      {/*<ul>
        {userRepos.map((repo) => (
          <li key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a target='_blank' rel='noreferrer' href={repo.html_url}>Acessar repositorio</a>
          </li>
        ))}
         <li>
          <h2>Nome do repositorio</h2>
          <p>Descrição do repositório</p>
          <a href="/">Acessar repositorio</a>
        </li> 
      </ul>
    </Container>
  );
}*/
