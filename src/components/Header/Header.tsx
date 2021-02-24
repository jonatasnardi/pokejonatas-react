import React from "react";
import { Wrapper } from "./Header.styles";
import logo from '../../assets/images/logo-pokemon.png'


const Header: React.FC = () => (
  <Wrapper>
    <img src={logo} />
  </Wrapper>
);

export default Header;
