import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function ReposList() {
  return (
    <Container>
      <div>
        <button type="button">
          <FiArrowLeft />
          Voltar
        </button>
        <h1>Repositorios de Alexsader</h1>
      </div>

      <ul>
        <li>
          <h2>Nome do repositorio</h2>
          <p>Descrição do repositório</p>
          <a href="/">Acessar repositorio</a>
        </li>
      </ul>
    </Container>
  );
}
