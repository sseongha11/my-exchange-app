import styles from "./page.module.css";
import {Grid} from "@mui/system";
import ChartInfo from "@/containers/view/ChartInfo";
import OrderbookList from "@/containers/view/OrderbookList";
import OrderForm from "@/containers/view/OrderForm";
import TradingList from "@/containers/view/TradingList";
import ChartDialog from "@/containers/view/ChatDialog";

export default async function View({ params } : { params: { id: number } }) {
    const { id } =  await params

  return (
      <div className={styles.page}>
          <main className={styles.main}>
              <h1>View {id}</h1>
              <Grid container spacing={2}>
                  <Grid size={{ xs: 8}}>
                      <ChartInfo />
                  </Grid>
                  <Grid size={{ xs:4 }}>
                      <OrderbookList />
                  </Grid>
                  <Grid size={{ xs:4 }}>
                      <OrderForm />
                  </Grid>
                  <Grid size={{ xs:8 }}>
                      <TradingList />
                      <ChartDialog />
                  </Grid>
              </Grid>
          </main>
      </div>
  )
}
