import styles from "../components/banner.module.css"
import Image from "next/image";
const Banner = (props) => {
    return (
        <div className={`${styles.container}`}>
            <img src="/images/banner.jpg" width={1200} height={400} alt="banner"/>
        </div>
    );
}

export default Banner;