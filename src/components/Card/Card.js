import "./card.css";

const Card = (props) => {
  const pokemon = props.pokemon;

  const handleChange = () => {
    props.changePage();
    props.changeShownPokemon(pokemon);
  };
  return (
    <div>
      <button className="btn-card" onClick={handleChange}>
        <div className="Card">
          <div className="Card_img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="Card_name">{pokemon.name}</div>
        </div>
      </button>
    </div>
  );
};

export default Card;
