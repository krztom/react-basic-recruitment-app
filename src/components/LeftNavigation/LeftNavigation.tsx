import { Divider, Drawer, List, Toolbar, MenuList, MenuItem   } from "@mui/material";
import { Link } from "react-router-dom";
import { navigationRoutes } from "../../navigationRoutes";
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */
export const LeftNavigation = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <p>Management</p>
            <MenuList>
              <Link to={navigationRoutes.dashboard.path}>
                  <MenuItem >
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard"/>
                  </MenuItem>
              </Link>
              <Link to={navigationRoutes.sports.path}>
                  <MenuItem >
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sports"/>
                  </MenuItem>
              </Link>
              <Link to={navigationRoutes.competitions.path}>
                <MenuItem >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Competitions"/>
                </MenuItem>
              </Link>
            </MenuList>
          <Divider />
          <List>
            <p>Planning</p>
            <List>
              <Link to={navigationRoutes.scheduling.path}>
                <MenuItem >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Scheduling"/>
                </MenuItem>
              </Link>
              <Link color="inherit" to={navigationRoutes.organisations.path}>
                <MenuItem >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Organisations"/>
                </MenuItem>
              </Link>
            </List>
          </List>
          <Divider />
          <List>
          <p >People</p>
            <List>
              <Link color='primary' to={navigationRoutes.users.path}>
                <MenuItem >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users"/>
                </MenuItem>
              </Link>
            </List>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
