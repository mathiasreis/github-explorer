//import { useState } from "react";
import { Container } from "./styles";

export function ItemReposList({ banana }) {
  return (
    
        <Container >
          <h2>{banana.name}</h2>
          <p>{banana.description}</p>
          <a target="_blank" rel="noreferrer" href={banana.html_url}>
            Acessar repositorio
          </a>
        </Container>
   
   
  );
}
