import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project import
import EditableCell from 'features/Tables/components/react-table/EditableCell';
import EditableRow from 'features/Tables/components/react-table/EditableRow';

// ==============================|| REACT TABLE - EDITABLE ||============================== //

export default function EditableTable() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <EditableRow />
      </Grid>
      <Grid item xs={12}>
        <EditableCell />
      </Grid>
    </Grid>
  );
}
