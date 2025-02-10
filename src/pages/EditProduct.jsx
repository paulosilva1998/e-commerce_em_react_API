import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const colors = {
    primary: '#007bff',  
    secondary: "#FFFFFF",  
    accent: "#333333",  
    background: "#F9F9F9",  
    border: "#E0E0E0",  
};

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  background: ${colors.secondary};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${colors.accent};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${colors.accent};
    font-weight: 500;
  }

  input,
  textarea {
    color: #000;
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid ${colors.border};
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
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: darkblue; 
    color: white;
  }

  &:active {
    transform: translateY(0);
  }
`;

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao buscar o produto:", err);
                setIsLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`https://fakestoreapi.com/products/${id}`, product)
            .then((res) => {
                console.log("Produto atualizado:", res.data);
                alert("Produto atualizado com sucesso!");
                navigate("/products");  
            })
            .catch((err) => {
                console.error("Erro ao atualizar o produto:", err);
                alert("Erro ao atualizar o produto. Tente novamente.");
            });
    };

    if (isLoading) {
        return (
            <Container>
                <p>Carregando dados do produto...</p>
            </Container>
        );
    }

    return (
        <Container>
            <FormTitle>Editar Produto</FormTitle>
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
                <Button type="submit">Atualizar Produto</Button>
            </form>
        </Container>
    );
};

export default EditProduct;