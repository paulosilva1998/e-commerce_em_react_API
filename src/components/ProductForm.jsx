import React, { useState } from "react";

const ProductForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        title: initialData.title || "",
        price: initialData.price || "",
        description: initialData.description || "",
        image: initialData.image || "",
        category: initialData.category || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <label>Price:</label>
            <input
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                required
            />
            <label>Description:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <label>Image URL:</label>
            <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
            />
            <label>Category:</label>
            <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default ProductForm;