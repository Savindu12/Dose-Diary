import React, { useState } from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import Toolbar from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const dropDown = ['Dashboard', 'View Profile', 'Edit Profile', 'Activity Log', 'Sign Out'];

function ProfileDropDown () {
    const [dropdownItem, setDropDownItem] = useState(null);

    const handleOpenUserMenu = (event) => {
        setDropDownItem(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setDropDownItem(null);
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={dropdownItem}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(dropdownItem)}
          onClose={handleCloseNavMenu}
        >
          {dropDown.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )
}

export default ProfileDropDown;