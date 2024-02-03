import { productQuantity } from '@/utils/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./productBasket.module.css"
import { remove,add,increase,decrease } from '@/redux/features/cartSlice';
import { MdDeleteOutline } from "react-icons/md";

const ProductBasket = ({data}) => {
    const state = useSelector(store=>store.cart)
    const dispatch = useDispatch()
    const quantity=productQuantity(state,data.id)
    console.log(quantity);
    return (
        <div className={`${styles.container}  flex flex-col lg:flex-row items-center justify-between mt-2 border-2 rounded border-dashed p-2`}>
            <img src={data.image} />
            <span>{data.title}</span>
            <div className="flex">
            {quantity == 1 && (
          <button
            onClick={() => dispatch(remove(data))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            <i><MdDeleteOutline /></i>
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => dispatch(decrease(data))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            -
          </button>
        )}
            <p className="bg-slate-100 w-btn rounded-full p-3 text-sm mx-2 icon-center">{quantity}</p>
            <button
            onClick={() => dispatch(increase(data))}
            className={`bg-sky-600 w-btn rounded-full p-3 text-sm mx-2 icon-center`}
          >
            +
          </button>
            </div>
            
            
        </div>
    );
};

export default ProductBasket;