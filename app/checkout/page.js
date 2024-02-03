"use client";
import ProductBasket from "@/components/ProductBasket";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./checkout.module.css";
import { checkout } from "@/redux/features/cartSlice";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
const Checkout = () => {
  const { data } = useSession();
  console.log(data);
  const clickHandler = () => {
    if (!data) {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    } else {
      dispatch(checkout(state));
    }
  };
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.container} marginAll flex justify-center w-100`}>
      {!state.itemCounter == 0 ? (
        <div className={` ${styles.checkContainer}flex flex-col mx-3 lg:mx-0`}>
          <div className={`${styles.productBasket} `}>
            {state.selectedItems.map((item) => (
              <ProductBasket key={item.id} data={item} dispatch={dispatch} />
            ))}
          </div>
          <div className={`${styles.checkBasket} flex flex-col p-5 mt-5`}>
            <p className="m-2">تعداد محصولات انتخابی:{state.itemCounter}</p>
            <p className="m-2">مجموع قیمت:{state.total}</p>
            <button
              onClick={clickHandler}
              className="bg-sky-600 hover:bg-sky-700 rounded-full p-3 text-sm"
            >
              checkout
            </button>
          </div>
        </div>
      ) : (
        <p>
          هیچ محصولی در سبد خرید وجود ندارد
          <Link
            href="/products"
            className="text-pink-700 hover:text-pink-500 mx-2"
          >
            دیدن محصولات
          </Link>
        </p>
      )}
      <Toaster />
    </div>
  );
};

export default Checkout;
