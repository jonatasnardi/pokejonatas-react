import React from "react";
import { PokemonType } from "../../types/pokemon.type";
import { FireworksWrapper } from "./Fireworks.styles";


type Props = {
  active: boolean;
  list: PokemonType[];
};

const Loader: React.FC<Props> = ({
  active,
  list,
}) => {
  return (
    <>
      {active && list.length > 0 && (
        <FireworksWrapper>
          <div className="before"></div>
          <div className="after"></div>
        </FireworksWrapper>
      )}
    </>
  )
};

export default Loader;
