"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/nav_bar";
import './styling/services.css';

interface Product {
    id: number;
    name: string;
    price: number;
    ratings: number;
    color_code: string;
    imageUrl: string;
    divStyling: {
        cardClass: string;
        AddCart_Id: string;
    };
}

export default function Services() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // This function is fetching the products from the API (i developed it using Express.js under TS)
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3011/api/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok || Please Refresh your browser");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <NavBar />
            <div className="margin__ijce9hf">
                <br />
            </div>
            
            <div className="mainheader_aboutwhatweprovide">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque fugit consequatur, est dicta dolorum? Nemo, nostrum vero tempora omnis ullam quis, laborum quam officia quas delectus reiciendis pariatur vitae?</p>
            </div>
            <div className="__ourservices_49jf9">
                <div>
                    <div>
                        <div className="__cardslists_denf9">
                            {products.map((product) => (
                                <div key={product.id} className={product.divStyling.cardClass}>
                                    <div className="__Services_details__fef9_img">
                                        <img className="__3service_img" src={product.imageUrl} alt={product.name} />
                                        <p className="pricing_d9jdf">
                                            {product.price.toLocaleString("sv-SE")} SEK
                                        </p>
                                    </div>
                                    <div className="__Services_details__fef9">
                                        <div>
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className="ratings_div_e3j">
                                            <p>Ratings</p>
                                            <div className="ratings_d9ej">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill={i < product.ratings ? "#F7B559" : "none"} stroke="#F7B559" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="__addtocart__" id={product.divStyling.AddCart_Id}>
                                            <p>ADD TO CART</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
