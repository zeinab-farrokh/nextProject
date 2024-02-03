import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Instagram from "@/components/Instagram";

import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Categories />
      <Instagram />
    </main>
  );
}
