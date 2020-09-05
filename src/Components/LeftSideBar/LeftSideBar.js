import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhotoVideo, faUmbrellaBeach, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faUmbrellaBeach}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faBriefcase}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faPhotoVideo}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default LeftSideBar;