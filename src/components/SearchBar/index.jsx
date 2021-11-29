import { FiSearch } from "react-icons/fi";
// import { useState } from "react";
import { useRef } from "react";
import { Container } from "./styles";

export function SearchBar({ setUser, setUserRepos }) {
  // const [searchedValue, setSearchedValue] = useState("");

  const inputRef = useRef();

  function getUserData(e) {
    e.preventDefault();

    try {
      // fetch(`https://api.github.com/users/${searchedValue}`)
      fetch(`https://api.github.com/users/${inputRef.current.value}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Not Found") {
            setUser(null);
            setUserRepos(null);
          } else {
            setUser(data);

            // fetch(`https://api.github.com/users/${searchedValue}/repos`)
            fetch(
              `https://api.github.com/users/${inputRef.current.value}/repos`
            )
              .then((response) => response.json())
              .then((data) => setUserRepos(data));
          }
        });
      // no data tenho o JSON do perfil pesquisado para passar no setUser como parametro
      // esse JSON vai para o App pq setUser esta setado lá
      // e setUser muda o estado de User atualizando seus valores com as infos do JSON
    } catch (error) {}
  }

  return (
    
    <Container>
      <h1>Github Explorer</h1>

      <form onSubmit={getUserData}>
        <div>
          <span>github.com/</span>
          <input
            type="text"
            ref={inputRef}
            // value={searchedValue}
            // onChange={(e) => setSearchedValue(e.target.value)}
          />
        </div>
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  );
}

/*
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

export function SearchBar({ setUser, setUserRepos }) {
  const [searchedValue, setSearchedValue] = useState("");

  function getUserData(event) {
    event.preventDefault();

    try {
      fetch(`https://api.github.com/users/${searchedValue}`)
        .then((response) => response.json())
        .then((data) => setUser(data));

      fetch(`https://api.github.com/users/${searchedValue}/repos`)
        .then((response) => response.json())
        .then((data) => setUserRepos(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Github Explorer</h1>

      <form onSubmit={getUserData}>
        <div>
          <span>github.com/</span>
          <input
            type="text"
            value={searchedValue}
            onChange={(event) => setSearchedValue(event.target.value)}
          />
        </div>
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  );
}


//let counter = 0;
const [counter, setCounter] = useState(0);

function increment() {
    //counter += 1;
    //console.log(counter);
    setCounter(counter + 1);
}



<h1>{counter}</h1>
<button type="button" onClick={increment}>Add</button>
*/
