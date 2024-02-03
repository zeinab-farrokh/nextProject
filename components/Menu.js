"use client";
import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
//import icons
import { IoCartOutline } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useSession } from "next-auth/react";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

//start component
const Menu = () => {
  const [search, setSearch] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [product, setProduct] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  const clickHandler = () => {
    setIsShow(true);
  };
  const closeHandler = () => {
    setIsShow(false);
  };
  const closeSearchHandler = () => {
    setShowSearch(false);
  };
  const searchHandler = () => {
    if (search) {
      const result = product.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      setSearchData(result);
      setShowSearch(true);
    } else {
      setSearchData(product);
    }
    console.log(searchData);
  };
  const { data } = useSession();
  
  const state = useSelector(store=>store.cart)
  return (
    <header className={`${styles.container}  flex flex-col lg:flex-row `}>
      <div className="flex items-center">
        <button
          className="lg:hidden ml-5 bg-slate-100 rounded-full"
          onClick={clickHandler}
        >
          <i>
            <RxHamburgerMenu fontSize={24} />
          </i>
        </button>
        <div className={`${styles.icons} flex bg-slate-100 p-1 rounded-full`}>
          <Link href="/checkout" className="mx-1">
            <IoCartOutline fontSize={32} />
            <span className={`bg-slate-400`}>{state.itemCounter}</span>
          </Link>

          {data ? (
            <Link href="/dashboard" className="mx-1">
              <i>
                <FaRegUser fontSize={28} />
              </i>
            </Link>
          ) : (
            <Link href="/login" className="mx-1">
              <i>
                <FiLogIn fontSize={28} />
              </i>
            </Link>
          )}
        </div>
      </div>

      <div id="mainMenu" className="lg:flex">
        {isShow ? (
          <button
            className="block lg:hidden mt-5 bg-slate-100 rounded-full"
            onClick={closeHandler}
          >
            <i>
              <IoIosClose fontSize={24} />
            </i>
          </button>
        ) : null}

        <ul className={isShow ? styles.show : styles.unshow}>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/products">محصولات</Link>
          </li>
          <li>
            <Link href="/" className="font-bold">
              LOGO
            </Link>
          </li>
          <li>
            <Link href="#">مقاله ها</Link>
          </li>
          <li>
            <Link href="/contact">ارتباط با ما</Link>
          </li>
        </ul>
      </div>

      <div className={`${styles.search} mt-5 lg:mt-0 lg:flex lg:items-center`}>
        <input
          type="text"
          className="focus:outline-none focus:border-sky-500 border-2 rounded-full w-80 p-2 placeholder-gray-300 placeholder:text-sm"
          value={search}
          placeholder="دنبال چی می گردی؟"
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <i onClick={searchHandler}>
          <CgSearch fontSize={28} />
        </i>
        {showSearch ? (
          <div className={`${styles.searchBox} rounded`}>
            <button onClick={closeSearchHandler}>
              <IoIosClose fontSize={24} />
            </button>

            {searchData
              ? searchData.map((item) => <SearchBox searchData={item} />)
              : null}
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Menu;
