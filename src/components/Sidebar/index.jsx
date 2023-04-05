import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography , Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { HomeOutlined, CodeOutlined, StorageOutlined, FavoriteOutlined, LanguageOutlined } from '@mui/icons-material';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  menuItem: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>

          <ListItem button component={Link} to="/">
  
            <ListItemText primary="PHP" />
          </ListItem>
          <ListItem button component={Link} to="/react">

            <ListItemText primary="React" />
          </ListItem>
          <ListItem button component={Link} to="/database">

            <ListItemText primary="Banco de Dados" />
          </ListItem>
          <ListItem button component={Link} to="/laravel">

            <ListItemText primary="Laravel" />
          </ListItem>
          <ListItem button component={Link} to="/javascript">

            <ListItemText primary="JavaScript" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
