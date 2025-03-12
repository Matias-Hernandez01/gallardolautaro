import { useState } from 'react';

import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import style from './ButtonMenu.module.css';

export const ButtonMenu = (menus) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={style.button}
      >
        <DehazeIcon
          sx={{
            fontSize: 50,
            color: 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
          strokeLinecap='round'
        />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        classes={{ paper: style.menu }}
      >
        {menus.map((menu) => (
          <MenuItem
            className={style.menuItem}
            onClick={handleClose}
            key={menu.href}
          >
            {menu.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
