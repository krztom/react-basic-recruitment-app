/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */
import * as React from 'react';
import { ReactComponent as Logo } from "../../svg/logo.svg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AdbIcon from '@mui/icons-material/Adb';

export const TopBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="secondary" sx={{ zIndex: 1400}}>
            <Toolbar>
            <Logo style={{
              width: "10rem"
            }}
            />
            Top bar component
            <ToggleOffRoundedIcon/>
            <AccountCircleRoundedIcon/>
            <LightModeIcon/>
            <DarkModeIcon/>

            </Toolbar>
          </AppBar>
        </Box>
    )
}