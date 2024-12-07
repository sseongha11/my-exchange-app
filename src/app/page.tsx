'use client'

import styles from './page.module.css'
import CoinList from "@/containers/list/CoinList";
import SearchInput from "@/commponents/list/SearchInput";
import {Grid} from "@mui/system";

export default function Home() {
  return (
      <div className={styles.page}>
          <main className={styles.main}>
              <Grid container spacing={2}>
                  <Grid size={{ xs:8 }}>
                      <SearchInput/>
                      <CoinList/>
                  </Grid>
              </Grid>
          </main>
      </div>
  );
}
