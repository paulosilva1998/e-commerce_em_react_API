import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  display: flex;

  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Admin Store</Logo>
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/add-product">Adicionar Produto</Link>
            </NavLinks>
        </HeaderContainer>
    );
};

export default Header;