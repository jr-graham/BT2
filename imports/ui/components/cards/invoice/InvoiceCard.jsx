import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// assets
import CaretUpOutlined from '@ant-design/icons/CaretUpOutlined';
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined';

export default function TableWidgetCard({ color, title, count, percentage, isLoss, children, invoice }) {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item md={5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="subtitle1">{title}</Typography>
          <Stack direction="column" spacing={1}>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="subtitle1">{invoice}</Typography>
              <Typography color="secondary">invoices</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={7}>
        <Box>
          <Stack direction="column" alignItems="flex-end" justifyContent="space-evenly">
            {percentage && (
              <Stack sx={{ ml: 1.25, pl: 1 }} direction="row" alignItems="center" spacing={1}>
                {!isLoss && <CaretUpOutlined style={{ fontSize: '0.75rem', color: `${color}` }} />}
                {isLoss && <CaretDownOutlined style={{ fontSize: '0.75rem', color: `${color}` }} />}
                <Typography color="secondary">{percentage}%</Typography>
              </Stack>
            )}
            {children}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

TableWidgetCard.propTypes = {
  color: PropTypes.any,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  children: PropTypes.any,
  invoice: PropTypes.string
};