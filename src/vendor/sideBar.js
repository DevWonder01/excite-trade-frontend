import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import clsx from 'clsx';
import {MenuItem, MenuList} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

          <MenuList>
            <MenuItem component={Link} to="/farmer-dashboard" >
            Dashboard
            </MenuItem>

            <MenuItem component={Link} to="#" >
            Profile
            </MenuItem>

            <MenuItem component={Link} to="/f-analysis" >
            Analytics
            </MenuItem>

            <MenuItem component={Link} to="/f-products">
            Products
            </MenuItem>

            <MenuItem component={Link} to="/upload" >
              Create Item
            </MenuItem>

            <MenuItem component={Link} to="#">
            Inventories
            </MenuItem>

          </MenuList>

    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="sidebar_button" onClick={toggleDrawer(anchor, true)}>

            <FontAwesomeIcon icon={faHamburger} />
          </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
