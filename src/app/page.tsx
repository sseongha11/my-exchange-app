'use client'

import styles from './page.module.css'
import CoinList from "@/containers/list/CoinList";
import SearchInput from "@/commponents/list/SearchInput";

export default function Home() {
  return (
      <div className={styles.page}>
          <main className={styles.main}>
              <SearchInput/>

              <CoinList/>
          </main>
      </div>
  );
}
