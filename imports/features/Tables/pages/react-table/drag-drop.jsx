import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';

// project import
import RowDragDrop from 'features/Tables/components/react-table/RowDragDrop';
import ColumnDragDrop from 'features/Tables/components/react-table/ColumnDragDrop';

// ==============================|| REACT TABLE - DRAG & DROP ||============================== //

export default function DragDrop() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RowDragDrop />
      </Grid>
      <Grid item xs={12}>
        <ColumnDragDrop />
      </Grid>
    </Grid>
  );
}
