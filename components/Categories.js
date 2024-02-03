import styles from "./categories.module.css";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className={`${styles.container} flex flex-wrap justify-center items-center my-7`} >
      <div className="m-2 lg:m-5">
        <Image src="/images/kids.jpg" width={300} height={300} alt="" />

        <div
          className={`${styles.details} flex flex-col justify-center items-center p-2 bg-slate-100 rounded`}
        >
          <h3 className="text-center font-bold text-xl mb-2">بچگانه</h3>
          <Link href="#">
            <button className="bg-gray-300 hover:bg-gray-400 rounded p-2">
              جزئیات
            </button>
          </Link>
        </div>
      </div>
      <div className="m-2 lg:m-5">
        <Image src="/images/woman.jpg" width={300} height={300} alt="" />

        <div
          className={`${styles.details} flex flex-col justify-center items-center p-2 bg-slate-100 rounded`}
        >
          <h3 className="text-center font-bold text-xl mb-2">زنانه</h3>
          <Link href="#">
            <button className="bg-gray-300 hover:bg-gray-400 rounded p-2">
              جزئیات
            </button>
          </Link>
        </div>
      </div>
      <div className="m-2 lg:m-5">
        <Image src="/images/man.jpg" width={300} height={300} alt="" />

        <div
          className={`${styles.details} flex flex-col justify-center items-center p-2 bg-slate-100 rounded`}
        >
          <h3 className="text-center font-bold text-xl mb-2">مردانه</h3>
          <Link href="#">
            <button className="bg-gray-300 hover:bg-gray-400 rounded p-2">
              جزئیات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
