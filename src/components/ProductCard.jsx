import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  a,
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  button {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const ProductCard = ({ product, onDelete }) => {
    return (
        <Card>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <ButtonGroup>
                <Link to={`/products/${product.id}`}>Details</Link>
                <Link to={`/products/edit/${product.id}`}>Edit</Link>
                <button onClick={() => onDelete(product.id)}>Delete</button>
            </ButtonGroup>
        </Card>
    );
};

export default ProductCard;