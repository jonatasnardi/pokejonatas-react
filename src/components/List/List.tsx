import React from "react";
import { PokemonType } from "../../types/pokemon.type";
import { ButtonWrapper, Wrapper, FavoriteStar } from "./List.styles";


type Props = {
  list: PokemonType[];
  notFound: boolean;
  onFavorite: Function;
  listBySearch: boolean;
};

const List: React.FC<Props> = ({
  list,
  notFound,
  onFavorite,
  listBySearch,
}) => (
  <Wrapper>
    

    {!notFound && (
      <>
        <p>Lista de Pokémons</p>

        <div>
          {list.map((pokemon: PokemonType) => (
            <ButtonWrapper 
              key={pokemon.name}
            >
              <span>{pokemon.name}</span>
              {
                !listBySearch && (
                  <FavoriteStar 
                    favorited={pokemon.favorited ? true : false}
                    data-id={pokemon.name} 
                    onClick={onFavorite()} 
                    className="favorite-star"
                  >
                    ★
                  </FavoriteStar>
                )
              }
            </ButtonWrapper>
          ))}
        </div>
      </>
    )}
    
    {notFound && <h3>Pokémon não encontrado!</h3>}
  </Wrapper>
);

export default List;
