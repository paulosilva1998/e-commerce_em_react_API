import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
  color: #ffffff;
`;

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
            setProducts(products.filter((product) => product.id !== id));
        });
    };

    return (
        <div>
            <Title>Lista de Produtos</Title>
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onDelete={handleDelete} />
                ))}
            </ProductGrid>
        </div>
    );
};

export default ProductList;