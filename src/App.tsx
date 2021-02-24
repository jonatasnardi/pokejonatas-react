import React, { useEffect, useRef, useState } from 'react';
import { fetchPokemonsByName, fetchPokemonsList } from './services/api';
import { GlobalStyle, Wrapper, ContainerInput } from './App.styles';
import List from './components/List/List';
import { PokemonType } from './types/pokemon.type';
import Loader from './components/Loader/Loader';
import Fireworks from './components/Fireworks/Fireworks';
import Header from './components/Header/Header';
import FavoritedList from './components/FavoritedList/FavoritedList';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [favoritedSelected, setFavoritedSelected] = useState(false);
  const [listBySearch, setListBySearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [favoritedPokemons, setFavoritedPokemons] = useState<PokemonType[]>(JSON.parse(localStorage.getItem('favoritedPokemons') || '[]') || []);
  const searchInputRef: any = useRef();

  const start = async () => {
    
    setNotFound(false);
    setFavoritedSelected(false);
    setListBySearch(false);
    localStorage.setItem('favoritedPokemons', JSON.stringify(favoritedPokemons));

    if (pokemons.length > 0 && !listBySearch) {
      setListBySearch(false);
      setPokemons(pokemons);
      return 
    } 
    
    setLoading(true);

    const pokemonList = await fetchPokemonsList(918, 200);

    for (let i = 0; i < pokemonList.length; i++) {
      for (let j = 0; j < favoritedPokemons.length; j++) {
        if (pokemonList[i].name === favoritedPokemons[j].name) {
          pokemonList[i].favorited = true;
        }
      }
    }

    setPokemons(pokemonList);
    setLoading(false);
  }

  const searchPokemons = async () => {
    setLoading(true);
    setNotFound(false);
    setFavoritedSelected(false);
    setListBySearch(true);
    const pokemonSearched = inputValue.toLowerCase();

    const pokemon: any = await fetchPokemonsByName(pokemonSearched);

    if (pokemon.length !== 0) {
      setPokemons([pokemon]);
    } else {
      setNotFound(true);
    }
    
    setLoading(false);
  }

  useEffect(() => {
    document.title = "Pokémon Jonatas - Letz"
    start();
  }, []);

  const inputChange = (e: any) => {
    setInputValue(e.target.value);
  }

  const onFavorite = (e: any) => {
    const selectedPokemon = e.target.dataset.id;
    const newPokemons = [];
    const favoritedPokemons = [];

    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name === selectedPokemon) {
        pokemons[i].favorited = !pokemons[i].favorited;
      }

      newPokemons.push(pokemons[i]);
    }

    for (let i = 0; i < newPokemons.length; i++) {
      if (newPokemons[i].favorited) {
        favoritedPokemons.push(newPokemons[i]);
      }
    }

    setFavoritedPokemons(favoritedPokemons);
    localStorage.setItem('favoritedPokemons', JSON.stringify(favoritedPokemons));

    setPokemons(newPokemons);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <GlobalStyle />
        <div className="App">
          <ContainerInput>
            <div className="search">
              <div className="field">
                <input type="text" className="input-search" id="input-search" name="input-search" required onChange={(e) => {inputChange(e)}} ref={searchInputRef} />
                <label>Buscar Pokémon</label>
              </div> 
            </div>
          </ContainerInput>

          <button className="btn-search" disabled={inputValue.length === 0} onClick={searchPokemons}>Buscar</button>
          <button className="btn-search btn-all" onClick={start}>Listar todos</button>
          <button className="btn-search btn-favorited" onClick={() => setFavoritedSelected(true)}>Ver meus favoritos</button>

          {
            favoritedSelected ? (
              <FavoritedList 
                list={favoritedPokemons}
              />
            ) : (
              <List 
                list={pokemons}
                notFound={notFound}
                onFavorite={() => onFavorite}
                listBySearch={listBySearch}
              />
            )
          }
          
        </div>
      </Wrapper>
      <Loader active={loading} />
      <Fireworks active={favoritedSelected} list={favoritedPokemons} />
    </>
  );
}

export default App;
