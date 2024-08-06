import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'ui/components/MainCard';
import AnalyticsDataCard from 'ui/components/cards/statistics/AnalyticsDataCard';

// import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';
import MarketingCardChart from 'features/Dashboard/components/MarketingCardChart';
import OrdersCardChart from 'features/Dashboard/components/OrdersCardChart';
import OrdersList from 'features/Dashboard/components/OrdersList';
import PageViews from 'features/Dashboard/components/PageViews';
import ReportChart from 'features/Dashboard/components/ReportChart';
import SalesCardChart from 'features/Dashboard/components/SalesCardChart';
import TransactionHistory from 'features/Dashboard/components/TransactionHistory';
import UsersCardChart from 'features/Dashboard/components/UsersCardChart';
import LabelledTasks from 'features/Dashboard/components/LabelledTasks';
import ReaderCard from 'features/Dashboard/components/ReaderCard';
import AcquisitionChannels from 'features/Dashboard/components/AcquisitionChannels';
import IncomeOverviewCard from 'features/Dashboard/components/IncomeOverviewCard';
import SaleReportCard from 'features/Dashboard/components/SaleReportCard';

// ==============================|| DASHBOARD - ANALYTICS ||============================== //

export default function DashboardAnalytics() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      {/*<Grid item xs={12}>*/}
      {/*  <WelcomeBanner />*/}
      {/*</Grid>*/}

      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticsDataCard title="Total Users" count="78,250" percentage={70.5}>
          <UsersCardChart />
        </AnalyticsDataCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticsDataCard title="Total Order" count="18,800" percentage={27.4} isLoss color="warning">
          <OrdersCardChart />
        </AnalyticsDataCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticsDataCard title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning">
          <SalesCardChart />
        </AnalyticsDataCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticsDataCard title="Total Marketing" count="$1,12,083" percentage={70.5}>
          <MarketingCardChart />
        </AnalyticsDataCard>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
        </Grid>
        <IncomeOverviewCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <PageViews />
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersList />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <TransactionHistory />
      </Grid>

      {/* row 5 */}
      <Grid item xs={12} md={7} lg={8}>
        <Stack spacing={3}>
          <LabelledTasks />
          <ReaderCard />
        </Stack>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <AcquisitionChannels />
      </Grid>
    </Grid>
  );
}
