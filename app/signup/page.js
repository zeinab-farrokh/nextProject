"use client"
import React, { useState } from "react";
import styles from "./signup.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/dist/server/api-utils";
// import { authOptions } from "../api/auth/[...nextauth]/route";

const Signup =  () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("پسور و تکرار آن برابر نیست");
      return;
    }

    setLoading(true);
    const res = await fetch("api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    setLoading(false);

    if (res.status == 201) {
      router.push("/login");
      toast.success("ثبت نام شما با موفقیت انجام شد");
    }
     else {
      toast.error(data.error);
    }
  };
  // const session= getServerSession(authOptions)
  // if(session) redirect("/")
  return (
    <div className={`${styles.container} flex justify-center items-center mt-14 lg:mt-0`}>
      <form className={`${styles.formContainer} bg-zinc-200 rounded`}>
        
        <div className={styles.formDetails}>
          <h2 className="text-center font-medium text-lg">ثبت نام</h2>

            <label>نام</label>
          <div>
            <input
              type="name"
              placeholder="نام"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm"
            />
          </div>

          <div>
            <label>تلفن</label>

            <input
              type="text"
              placeholder="تلفن"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm "
            />
          </div>

          <div>
            <label>ایمیل</label>
            <input
              type="text"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm "
            />
          </div>

          <div>
            <label>پسورد</label>
            <input
              type="password"
              placeholder="پسورد"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm "
            />
          </div>

          <div>
            <label>تکرار پسورد</label>
            <input
              type="password"
              placeholder="تکرار پسورد"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm "
            />
          </div>
          {loading ? (
            <ThreeDots
              color="#304ffe"
              height={24}
              ariaLabel="three-dots-loading"
              visible={true}
              wrapperStyle={{ margin: "auto" }}
            />
          ) : (
            <button className="bg-sky-500 hover:bg-sky-600 rounded-full mt-6" onClick={submitHandler}>ثبت نام</button>
          )}

          <div className={styles.haveAccount}>
            <p>
              حساب کاربری دارید؟
              <Link href="/login">
                <span>ورود</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
      
      <Toaster />
    </div>
  );
};

export default Signup;
