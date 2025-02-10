import React, { useState } from 'react';
import axios from 'axios';
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

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${colors.text};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const InputField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${colors.text}; 
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    color: #000; 
    border-radius: 8px;
    border: 1px solid ${colors.primary};
    background-color: ${colors.background};
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border-color: ${colors.primary};
    outline: none;
  }

  textarea {
    resize: vertical;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://fakestoreapi.com/products', product)
            .then(() => {
                alert('Produto adicionado com sucesso!');
                setProduct({
                    title: '',
                    price: '',
                    description: '',
                    image: '',
                    category: '',
                });
            })
            .catch((err) => {
                console.error('Erro ao adicionar produto:', err);
                alert('Erro ao adicionar o produto.');
            });
    };

    return (
        <Container>
            <FormContainer>
                <FormTitle>Adicionar Produto</FormTitle>
                <form onSubmit={handleSubmit}>
                    <InputField>
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            required
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="image">URL da Imagem</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            required
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="category">Categoria</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        />
                    </InputField>
                    <Button type="submit">Adicionar Produto</Button>
                </form>
            </FormContainer>
        </Container>
    );
};

export default AddProduct;