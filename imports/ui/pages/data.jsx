import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project imports
import ToDoList from '../components/widget/ToDoList';
import TrafficSources from '../components/widget/TrafficSources';
import TeamMembers from '../components/widget/TeamMembers';

import UserActivity from '../components/widget/UserActivity';
import LatestMessages from '../components/widget/LatestMessages';

import ProjectTable from '../components/widget/ProjectTable';
import ProductSales from '../components/widget/ProductSales';

import TasksCard from '../components/widget/TasksCard';
import ApplicationSales from '../components/widget/ApplicationSales';

import ActiveTickets from '../components/widget/ActiveTickets';
import LatestPosts from '../components/widget/LatestPosts';

import FeedsCard from '../components/widget/FeedsCard';
import LatestCustomers from '../components/widget/LatestCustomers';

import LatestOrder from '../components/widget/LatestOrder';

import IncomingRequests from '../components/widget/IncomingRequests';
import TotalRevenue from '../components/widget/TotalRevenue';
import NewCustomers from '../components/widget/NewCustomers';

import RecentTickets from '../components/widget/RecentTickets';

// ===========================|| WIDGET - DATA ||=========================== //

export default function WidgetData() {
  return (
    <Grid container spacing={3}>
      {/* row 1 */}
      <Grid item xs={12} lg={4} md={6}>
        <ToDoList />
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <TrafficSources />
      </Grid>
      <Grid item xs={12} lg={4} md={12}>
        <TeamMembers />
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={6}>
        <LatestMessages />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <UserActivity />
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} lg={6} md={6}>
        <ProjectTable />
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <ProductSales />
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={4}>
        <TasksCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <ApplicationSales />
      </Grid>

      {/* row 5 */}
      <Grid item xs={12} md={8}>
        <ActiveTickets />
      </Grid>
      <Grid item xs={12} md={4}>
        <LatestPosts />
      </Grid>

      {/* row 6 */}
      <Grid item xs={12} md={5} lg={4}>
        <FeedsCard />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <LatestCustomers />
      </Grid>

      {/* row 7 */}
      <Grid item xs={12}>
        <LatestOrder />
      </Grid>

      {/* row 8 */}
      <Grid item xs={12} lg={4} md={6}>
        <IncomingRequests />
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} lg={4} md={12}>
        <NewCustomers />
      </Grid>

      {/* row 9 */}
      <Grid item xs={12} md={12} lg={8}>
        <RecentTickets />
      </Grid>
    </Grid>
  );
}
