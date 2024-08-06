import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material-ui
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// project imports
import MainCard from 'ui/components/MainCard';
import SimpleBar from 'ui/components/third-party/SimpleBar';
import Dot from 'ui/components/@extended/Dot';

// =========================|| DATA WIDGET - INCOMING REQUESTS ||========================= //

export default function IncomingRequests() {
  return (
    <MainCard
      title="Incoming Requests"
      content={false}
      secondary={
        <Link component={RouterLink} to="#" color="primary">
          View all
        </Link>
      }
    >
      <SimpleBar sx={{ height: 334 }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton>
            <ListItemIcon>
              <Dot color="success" size={12} />
            </ListItemIcon>
            <ListItemText primary="Incoming requests" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot color="error" size={12} />
            </ListItemIcon>
            <ListItemText primary="You have 2 pending requests.." />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot color="warning" size={12} />
            </ListItemIcon>
            <ListItemText primary="You have 3 pending tasks" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot size={12} />
            </ListItemIcon>
            <ListItemText primary="New order received" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot color="success" size={12} />
            </ListItemIcon>
            <ListItemText primary="Incoming requests" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot size={12} />
            </ListItemIcon>
            <ListItemText primary="You have 2 pending requests.." />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot color="warning" size={12} />
            </ListItemIcon>
            <ListItemText primary="You have 3 pending tasks" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <Dot color="error" size={12} />
            </ListItemIcon>
            <ListItemText primary="New order received" />
          </ListItemButton>
        </List>
      </SimpleBar>
    </MainCard>
  );
}
