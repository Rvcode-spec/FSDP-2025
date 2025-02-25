import React, { useState } from "react";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const ProductAdd = async () => {
        console.log(!name);
        if (!name || !price || !category || !company) {
            setError(true);
            return;
        }

        // Check if user exists in localStorage
        const user = localStorage.getItem("user");
        if (!user) {
            console.error("User not found in localStorage");
            return;
        }
        const userId = JSON.parse(user)._id;


        try {
            let result = await fetch("http://localhost:5000/Add-Product", {
                method: "POST",
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            result = await result.json();
            console.log("Product added successfully:", result);

            // Reset fields after successful submission
            setName("");
            setPrice("");
            setCategory("");
            setCompany("");
            setError(false);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div>
            <h1 className="inputBox">Add Product</h1>

            <input
                type="text"
                placeholder="Product Name"
                className="inputBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className="filled-input">Name is required</span>}

            <input
                type="text"
                placeholder="Product Price"
                className="inputBox"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className="filled-input">Price is required</span>}

            <input
                type="text"
                placeholder="Product Category"
                className="inputBox"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className="filled-input">Category is required</span>}

            <input
                type="text"
                placeholder="Product Company"
                className="inputBox"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className="filled-input">Company is required</span>}

            <button onClick={ProductAdd} className="button">
                Submit
            </button>
        </div>
    );
}
