
import Link from "next/link";
import React from "react";
import styles from "./dashboard.module.css";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiHandWaving } from "react-icons/pi";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";
const dashboard = async () => {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/login")
  return (
    <div className={`${styles.container} flex `}>
      <div className={`${styles.sideBar} flex flex-col justify-center items-center p-5`}>

        <div className="my-5 flex flex-col justify-center items-center">
          <FaRegUser fontSize={28} />
          <span className="not-italic mt-1">{session?.user.email}</span>
        </div>

        <ul>
          <li>
            <Link href="#">سفارش های من</Link>
          </li>
          <li>
            <Link href="#">خروج از حساب</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.main}`}>
          <h3>سلام<PiHandWaving className="inline" /></h3>
          <div className="flex flex-col lg:flex-row">
          <p>همین الان میتونی سفارشت رو ثبت کنی<CiHeart className="inline"/></p>
          <Link href="/products" className="text-pink-700 hover:text-pink-500"><p>دیدن محصولات</p></Link>
          </div>
      </div>
    </div>
  );
};

export default dashboard;
