import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project import
import BasicTable from 'features/Tables/components/react-table/BasicTable';
import FooterTable from 'features/Tables/components/react-table/FooterTable';

// ==============================|| REACT TABLE - BASIC ||============================== //

export default function Basic() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <BasicTable title="Basic Table" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <BasicTable title="Striped Table" striped />
      </Grid>
      <Grid item xs={12}>
        <FooterTable />
      </Grid>
    </Grid>
  );
}
