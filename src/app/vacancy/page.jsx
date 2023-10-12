import { Button } from "@/components";
import styles from "./vacancy.module.css";
import Head from "next/head";
import { metadata } from "@/utils/metadata";
import Vacancy from "./listdata";
import { FilterBar } from "@/components/sidebar";

export default function page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hello world</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className={styles.sidebar}>
        <FilterBar />
      </div>
      <div suppressHydrationWarning className={styles.sub_container}>
        <div className={styles.filtermobile}>
          <Button text={"Filter"} />
        </div>
        <Vacancy />
      </div>
    </div>
  );
}
