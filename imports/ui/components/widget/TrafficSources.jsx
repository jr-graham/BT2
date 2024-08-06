import React from 'react';
// material-ui
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui/components/MainCard';

// ===========================|| DATA WIDGET - TRAFFIC SOURCES ||=========================== //

export default function TrafficSources() {
  return (
    <MainCard
      title="Traffic Sources"
      subheader={
        <Typography variant="caption" color="secondary">
          You’re getting more and more sources, keep it up!
        </Typography>
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item sm zeroMinWidth>
              <Typography variant="body2">Referral</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                20%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={20} color="primary" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item sm zeroMinWidth>
              <Typography variant="body2">Bounce</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                58%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={60} color="secondary" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item sm zeroMinWidth>
              <Typography variant="body2">Internet</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                40%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={40} color="primary" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item sm zeroMinWidth>
              <Typography variant="body2">Social</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                90%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant="determinate" value={90} color="primary" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
}
