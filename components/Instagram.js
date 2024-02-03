import Link from "next/link";
import Image from "next/image";
import styles from "./instagram.module.css";
import { IoLogoInstagram } from "react-icons/io";

const Instagram = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">اینستاگرام ما</h1>
      <div className={`${styles.container} flex flex-wrap justify-center items-center my-7`}>
        <div className={`${styles.instagram} m-2 lg:m-5`}>
          <div className={styles.overlay}><i><IoLogoInstagram fontSize={38}/></i></div>
          <Link href="#" >
            <Image
              src="/images/woman.jpg"
              width={300}
              height={300}
              alt="insta"
            />
          </Link>
        </div>
        <div className={`${styles.instagram} m-2 lg:m-5`}>
          <div className={styles.overlay}><i><IoLogoInstagram fontSize={38}/></i></div>
          <Link href="#" >
            <Image
              src="/images/kids.jpg"
              width={300}
              height={300}
              alt="insta"
            />
          </Link>
        </div>
        <div className={`${styles.instagram} m-2 lg:m-5`}>
          <div className={styles.overlay}><i><IoLogoInstagram fontSize={38}/></i></div>
          <Link href="#" >
            <Image src="/images/man.jpg" width={300} height={300} alt="insta" />
          </Link>
        </div>
        <div className={`${styles.instagram} m-2 lg:m-5`}>
          <div className={styles.overlay}><i><IoLogoInstagram fontSize={38}/></i></div>
          <Link href="#" >
            <Image
              src="/images/woman.jpg"
              width={300}
              height={300}
              alt="insta"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Instagram;
