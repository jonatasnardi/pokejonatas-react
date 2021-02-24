import React from "react";
import { PokemonType } from "../../types/pokemon.type";
import { ButtonWrapper, Wrapper } from "./FavoritedList.styles";


type Props = {
  list: PokemonType[];
};

const FavoritedList: React.FC<Props> = ({
  list,
}) => (
  <Wrapper>
    

    <>
      <p>Favoritos</p>

      <div>
        {list.map((pokemon: PokemonType) => (
          <ButtonWrapper 
            key={pokemon.name}
          >
            <span>{pokemon.name}</span>
          </ButtonWrapper>
        ))}
      </div>
    </>
    
    {list.length === 0 && <h3>Nenhum favorito adicionado!</h3>}
  </Wrapper>
);

export default FavoritedList;
