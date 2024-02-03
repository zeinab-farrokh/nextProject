"use client";
import { productQuantity, shorten } from "@/utils/auth";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../components/card.module.css";
import { add, decrease, increase, remove } from "@/redux/features/cartSlice";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ productData }) => {
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(state, productData.id);
  console.log(state);

  return (
    <div className={`${styles.cardContainer}   flex  flex-col m-5 p-3 rounded`}>
      <div
        className={`${styles.imgContainer} flex items-center justify-center`}
      >
        <img src={productData.image} alt="img" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg my-2">{shorten(productData.title)}</span>
        <span className="mb-2 text-green-600 text-md">
          {productData.price} تومان{" "}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <Link href={`/products/${productData.id}`}>
          <button
            className={`bg-gray-300 w-100 hover:bg-gray-500 rounded-full p-2 text-sm`}
          >
            دیدن جزئیات
          </button>
        </Link>
        <div className="flex items-center justify-end">
        {quantity == 0 ? (
          <button
            onClick={() => dispatch(add(productData))}
            className={`bg-sky-600 w-100 hover:bg-sky-700 rounded-full p-2 text-sm`}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <button
            onClick={() => dispatch(increase(productData))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            +
          </button>
        )}
        {!!quantity&&<span>{quantity}</span>}
        
        {quantity == 1 && (
          <button
            onClick={() => dispatch(remove(productData))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            <i><MdDeleteOutline fontSize={20}/></i>
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => dispatch(decrease(productData))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            -
          </button>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Card;
