import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project-import
import VirtualizedInfiniteScrollTable from 'features/Tables/components/react-table/VirtualizedInfiniteScrollTable';
import VirtualizedRowsTable from 'features/Tables/components/react-table/VirtualizedRowsTable';

// ==============================|| REACT TABLE - VIRTUALIZED ||============================== //

export default function VirtualizedRows() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <VirtualizedInfiniteScrollTable />
      </Grid>
      <Grid item xs={12}>
        <VirtualizedRowsTable />
      </Grid>
    </Grid>
  );
}