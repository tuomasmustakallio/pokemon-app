import React, { useEffect, useState } from "react";
import { get20Pokemon, getPokemon } from "../services/pokemon";
import Card from "./Card/Card";
import "./mainpage.css";

const url = "https://pokeapi.co/api/v2/pokemon/";

const MainPage = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function fetchData() {
      let response = get20Pokemon(url);
      await loadingPokemon(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        return getPokemon(pokemon);
      })
    );

    setPokemonData(_pokemonData);
  };

  const handleSearch = () => {
    if (searchText !== "") {
      let lower = searchText.toLowerCase();
      let results = [url + lower];
      loadingPokemon(results);
      setSearchText("");
    }
  };
  const handleShownPokemon = (pokemon) => {
    props.changeShownPokemon(pokemon);
  };

  const Refresh = () => {
    setLoading(true);
    let response = get20Pokemon(url);
    loadingPokemon(response);
    setLoading(false);
  };
  return (
    <div>
      <>
        <div className="searchbar">
          <h1>
            <i>PokeAPI</i>
          </h1>
          <input
            type="text"
            className="search"
            placeholder="Type the name of a Pokemon"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button className="btn-search" onClick={handleSearch}>
            Search
          </button>
          <button className="btn-search" onClick={Refresh}>
            Refresh
          </button>
        </div>
        {loading ? (
          <h1>
            <i> Loading...</i>
          </h1>
        ) : (
          <div className="grid">
            {pokemonData.map((pokemon, i) => {
              return (
                <Card
                  key={i}
                  pokemon={pokemon}
                  changePage={props.changePage}
                  changeShownPokemon={handleShownPokemon}
                />
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};
export default MainPage;
