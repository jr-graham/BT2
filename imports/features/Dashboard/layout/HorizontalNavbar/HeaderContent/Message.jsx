import React, { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'ui/components/MainCard';
import IconButton from 'ui/components/@extended/IconButton';
import Transitions from 'ui/components/@extended/Transitions';
import { ThemeMode } from 'config';

// assets
import MailOutlined from '@ant-design/icons/MailOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';

let avatar2 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-2.png';
let avatar3 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-3.png';
let avatar4 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-4.png';
let avatar5 = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-5.png';

// sx styles
const avatarSX = {
  width: 48,
  height: 48
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| HEADER CONTENT - MESSAGES ||============================== //

export default function Message() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MailOutlined />
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        sx={{ maxHeight: 'calc(100vh - 250px)' }}
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [matchesXs ? -60 : 0, 9] } }] }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.customShadows.z1, width: '100%', minWidth: 285, maxWidth: { xs: 285, md: 420 } }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title="Message"
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <IconButton size="small" onClick={handleToggle}>
                      <CloseOutlined />
                    </IconButton>
                  }
                >
                  <List
                    component="nav"
                    sx={{
                      p: 0,
                      '& .MuiListItemButton-root': {
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      }
                    }}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar2} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            It&apos;s{' '}
                            <Typography component="span" variant="subtitle1">
                              Cristina danny&apos;s
                            </Typography>{' '}
                            birthday today.
                          </Typography>
                        }
                        secondary="2 min ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          3:00 AM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar3} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Aida Burg
                            </Typography>{' '}
                            commented your post.
                          </Typography>
                        }
                        secondary="5 August"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          6:00 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar4} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography component="span" variant="subtitle1">
                            There was a failure to your setup.
                          </Typography>
                        }
                        secondary="7 hours ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          2:45 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="profile user" src={avatar5} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Cristina Danny
                            </Typography>{' '}
                            invited to join{' '}
                            <Typography component="span" variant="subtitle1">
                              Meeting.
                            </Typography>
                          </Typography>
                        }
                        secondary="Daily scrum meeting time"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          9:10 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText
                        primary={
                          <Typography variant="h6" color="primary">
                            View All
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
