import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'ui/components/MainCard';

// charts
import ApexAreaChart from '../../../features/Charts/apexchart/ApexAreaChart';
import ApexBarChart from '../../../features/Charts/apexchart/ApexBarChart';
import ApexColumnChart from '../../../features/Charts/apexchart/ApexColumnChart';
import ApexLineChart from '../../../features/Charts/apexchart/ApexLineChart';
import ApexMixedChart from '../../../features/Charts/apexchart/ApexMixedChart';
import ApexPieChart from '../../../features/Charts/apexchart/ApexPieChart';
import ApexPolarChart from '../../../features/Charts/apexchart/ApexPolarChart';
import ApexRedialChart from '../../../features/Charts/apexchart/ApexRadialChart';

// ==============================|| APEX CHARTS ||============================== //

export default function Apexchart() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Column Chart">
          <ApexColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Bar Chart">
          <ApexBarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Line Chart">
          <ApexLineChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Mixed Chart">
          <ApexMixedChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Redial Chart">
          <ApexRedialChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Polar Chart">
          <ApexPolarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Pie Chart">
          <ApexPieChart />
        </MainCard>
      </Grid>
    </Grid>
  );
}
