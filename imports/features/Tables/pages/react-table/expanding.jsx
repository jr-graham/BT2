import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project import
import ExpandingTable from 'features/Tables/components/react-table/ExpandingTable';
import ExpandingDetails from 'features/Tables/components/react-table/ExpandingDetails';
import ExpandingSubTable from 'features/Tables/components/react-table/ExpandingSubTable';

// ==============================|| REACT TABLE - EXPANDING ||============================== //

export default function Expanding() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ExpandingTable />
      </Grid>
      <Grid item xs={12}>
        <ExpandingDetails />
      </Grid>
      <Grid item xs={12}>
        <ExpandingSubTable />
      </Grid>
    </Grid>
  );
}
