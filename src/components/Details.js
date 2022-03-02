import "./detail.css";

const typeColors = {
  bug: "#729f3f",
  dragon: "#53a4cf",
  fairy: "#fdb9e9",
  fire: "#fd7d24",
  ghost: "#7b62a3",
  ground: "#f7de3f",
  normal: "#a4acaf",
  pyschic: "#f366b9",
  steel: "#9eb7b",
  dark: "#707070",
  electric: "#eed535",
  fighting: "#d56723",
  flying: "#3dc7ef",
  grass: "#9bcc50",
  ice: "#51c4e7",
  poison: "#b97fc9",
  rock: "#a38c21",
  water: "#4592c4",
};

const Details = (props) => {
  const pokemon = props.shownPokemon;
  console.log(pokemon.name);
  return (
    <div>
      <div
        className="Pokemon"
        style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }}
      >
        <div className="Pokemon_img">
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="Pokemon_name">{pokemon.name}</div>
        <p className="title">Type</p>
        <p>{pokemon.types.map((type) => type.type.name)}</p>
        <p className="title">Base experience</p>
        <p>{pokemon.base_experience}</p>
        <p className="title">Stats</p>
        {pokemon.stats.map((stat) => {
          return <p>{stat.base_stat + " " + stat.stat.name}</p>;
        })}
        <p className="title">Ability</p>
        <p>{pokemon.abilities.map((ability) => ability.ability.name + "\n")}</p>
        <p className="title">Weight</p>
        <p>{pokemon.weight}</p>
        <p className="title">Height</p>
        <p>{pokemon.height}</p>
        <div className="Pokemon_img">
          <button className="btn-back" onClick={props.changePage}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
export default Details;
