import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Details from "./components/Details";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [shownPokemon, setShowPokemon] = useState();

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleShownPokemon = (pokemon) => {
    setShowPokemon(pokemon);
  };

  return (
    <div>
      {showDetails ? (
        <Details changePage={handleShowDetails} shownPokemon={shownPokemon} />
      ) : (
        <MainPage
          changePage={handleShowDetails}
          changeShownPokemon={handleShownPokemon}
        />
      )}
    </div>
  );
}

export default App;
