import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project import
import RowSelectionTable from 'features/Tables/components/react-table/RowSelectionTable';
import RSPControl from 'features/Tables/components/react-table/RSPControl';

// ==============================|| REACT TABLE - ROW SELECTION ||============================== //

export default function RowSelection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RowSelectionTable />
      </Grid>
      <Grid item xs={12}>
        <RSPControl />
      </Grid>
    </Grid>
  );
}
