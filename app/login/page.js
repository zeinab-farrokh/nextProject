"use client";
import { useState } from "react";
import styles from "./login.module.css";

import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginHandler = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={`${styles.container} flex justify-center items-center mt-14 lg:mt-0`}>
      <form className={`${styles.formContainer} bg-zinc-200 rounded`}>
        <div className={styles.formDetails}>
          <h2 className="text-center font-medium text-lg">ورود</h2>
          <div>
            <label>ایمیل</label>
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm"
            />
          </div>
          <div>
            <label>پسورد</label>
            <input
              type="password"
              placeholder="پسورد"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 rounded-full focus:outline-none focus:border-sky-500 placeholder-gray-300 placeholder:text-sm"
            />
            <Link href="#">
              <p> رمز عبور خود را فراموش کردید؟</p>
            </Link>
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
            <button
              className="bg-sky-500 hover:bg-sky-600 rounded-full mt-4"
              onClick={loginHandler}
            >
              ورود
            </button>
          )}
          <div className={styles.haveAccount}>
            <p>
              حساب کاربری ندارید؟
              <Link href="/signup">
                <span>ثبت نام</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
