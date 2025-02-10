import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((error) =>
                console.error("Erro ao carregar o produto:", error)
            );
    }, [id]);

    if (!product)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#555",
                }}
            >
                Loading...
            </div>
        );

    return (
        <div
            style={{
                backgroundColor: "#f4f4f9",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                maxWidth: "600px",
                margin: "50px auto",
                padding: "25px",
                fontFamily: "'Roboto', sans-serif",
                color: "#2c3e50",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                }}
            >
                {product.title}
            </h2>
            <img
                src={product.image}
                alt={product.title}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
            />
            <p
                style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    color: "#5f5f6e",
                }}
            >
                {product.description}
            </p>
            <p
                style={{
                    fontSize: "16px",
                    fontStyle: "italic",
                    marginBottom: "10px",
                    color: "#7d7d89",
                }}
            >
                <strong>Category:</strong> {product.category}
            </p>
            <p
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#27ae60",
                    marginTop: "15px",
                }}
            >
                ${product.price}
            </p>
        </div>
    );
};

export default ProductDetails;