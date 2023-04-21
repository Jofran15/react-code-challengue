import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {console.log(pokemons)}
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
      ))}
    </>
  );
}

export default Home;
