import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

export function SearchBar() {
  const [searchedValue, setSearchedValue] = useState("");

  function getUserData(event) {
    event.preventDefault();

    try {
      fetch(`https://api.github.com/users/${searchedValue}`)
        .then(response => response.json())
        .then(data => console.log(data));
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

/*
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
