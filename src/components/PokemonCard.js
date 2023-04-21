import React from "react";

const PokemonCard = (props) => {
  const { id, name, url } = props;
  return (
    <div className="posts-container">
    
      <div className="post-card" key={id}>
        <h2 className="post-title">{name}</h2>
        <h3>{url}</h3> 
        <button>Favorite</button>
      </div>
     
    </div>
  );
};

export default PokemonCard;
