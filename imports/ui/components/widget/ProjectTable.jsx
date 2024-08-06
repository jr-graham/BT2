import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material-ui
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui/components/MainCard';

// assets
const Avatar1 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-1.png';
const Avatar2 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-2.png';
const Avatar3 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-3.png';
const Avatar4 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-4.png';
const Avatar6 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-6.png';

// table data
const createData = (avtar, name, designation, product, date, badgeText, badgeType) => ({
  avtar,
  name,
  designation,
  product,
  date,
  badgeText,
  badgeType
});

const rows = [
  createData(Avatar1, 'John Deo', 'Graphics Designer', 'Materially', 'Jun, 26', 'Low', 'warning'),
  createData(Avatar2, 'Jenifer Vintage', 'Web Designer', 'Mashable', 'March, 31', 'Lower', 'error'),
  createData(Avatar3, 'William Jem', 'Developer', 'Flatable', 'Aug, 02', 'Medium', 'primary'),
  createData(Avatar4, 'David Jones', 'Developer', 'Guruable', 'Sep, 22', 'High', 'info'),
  createData(Avatar6, 'Stebin Ben', 'Leader', 'Berry', 'Sep, 22', 'Higher', 'success')
];

// ===========================|| DATA WIDGET - PROJECT TABLE CARD ||=========================== //

export default function ProjectTable() {
  return (
    <MainCard
      title="Projects"
      content={false}
      secondary={
        <Link component={RouterLink} to="#" color="primary">
          View all
        </Link>
      }
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>Assigned</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell align="right" sx={{ pr: 3 }}>
                Priority
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell sx={{ pl: 3 }}>
                  <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                    <Grid item>
                      <Avatar alt="User 1" src={row.avtar} />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography variant="subtitle1">{row.name}</Typography>
                      <Typography variant="caption" color="secondary">
                        {row.designation}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right" sx={{ pr: 3 }}>
                  <Chip color={row.badgeType} label={row.badgeText} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
