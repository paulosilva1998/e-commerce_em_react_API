import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = {
  primary: '#007bff',
  background: '#f5f5f5',
  accent: '#28a745',
  text: '#333',
};

const Container = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  padding: 50px 20px;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: ${colors.text};
  font-weight: 600;
`;

const SubTitle = styled.h3`
  color: black;
  font-weight: 400;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  color: black;
  width: 280px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background: ${colors.primary};
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  margin-top: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
    color:white;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Bem-vindo à Admin Store</Title>
        <SubTitle>Gerencie seus produtos de maneira fácil e prática!</SubTitle>
      </Header>

      <MainContent>
        <Card>
          <h3>Produtos</h3>
          <p>Veja e edite seus produtos na loja</p>
          <Button to="/products">Ver Produtos</Button>
        </Card>
        <Card>
          <h3>Adicionar Produto</h3>
          <p>Adicione um novo produto à loja</p>
          <Button to="/add-product">Adicionar Produto</Button>
        </Card>
      </MainContent>
    </Container>
  );
};

export default Home;