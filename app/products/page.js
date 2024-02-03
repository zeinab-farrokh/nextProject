"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { ThreeDots } from "react-loader-spinner";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetch data

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div
      className={`${styles.productContainer}  my-5 flex justify-center items-center`}
    >
      <div className="container flex flex-wrap justify-center items-center">
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={24}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          product.map((item) => <Card key={item.id} productData={item} />)
        )}
      </div>
    </div>
  );
};

export default Product;
