"use client";
import React, { useEffect, useState } from "react";
import styles from "./productDetails.module.css";
import Image from "next/image";
const Detail = ({ params: { productID } }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const res = fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className={`${styles.container} marginAll  flex flex-col items-center justify-center lg:flex-row  `}>
      
      <img src={data.image}  alt="details" />
        <div className="lg:mr-4">
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="w-auto text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className="flex justify-between mt-4">
        <span className="text-green-500">{data.price} تومان</span>
        <button  className={`bg-sky-600  hover:bg-sky-700 rounded-full p-2 text-sm`}>افزودن به سبد خرید</button>
        </div>
        </div>
      
      
    </div>
  );
};

export default Detail;
