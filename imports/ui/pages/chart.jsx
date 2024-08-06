import React from 'react';
// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from '../components/MainCard';
import AnalyticsDataCard from '../components/cards/statistics/AnalyticsDataCard';

import MonthlyBarChart from '../../features/Dashboard/components/MonthlyBarChart';
import UniqueVisitorCard from '../../features/Dashboard/components/UniqueVisitorCard';
import UsersCardChart from '../../features/Dashboard/components/UsersCardChart';
import OrdersCardChart from '../../features/Dashboard/components/OrdersCardChart';
import SalesCardChart from '../../features/Dashboard/components/SalesCardChart';
import MarketingCardChart from '../../features/Dashboard/components/MarketingCardChart';
import ReportChart from '../../features/Dashboard/components/ReportChart';
import IncomeOverviewCard from '../../features/Dashboard/components/IncomeOverviewCard';
import SaleReportCard from '../../features/Dashboard/components/SaleReportCard';
import AcquisitionChannels from '../../features/Dashboard/components/AcquisitionChannels';

// ==============================|| WIDGET - CHARTS ||============================== //

export default function WidgetChart() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
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

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 1.25 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
          </List>
          <ReportChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
        </Grid>
        <IncomeOverviewCard />
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <AcquisitionChannels />
      </Grid>
    </Grid>
  );
}
