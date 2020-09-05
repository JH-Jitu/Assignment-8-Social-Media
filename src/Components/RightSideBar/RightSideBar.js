import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const RightSideBar = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <h5>Chat Head</h5>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faMale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sakib" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faMale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Rafi" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faFemale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tabassum" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faMale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fardin" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faMale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sunny" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <FontAwesomeIcon icon={faFemale}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Timmu" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default RightSideBar;