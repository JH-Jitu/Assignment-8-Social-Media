import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Home from '../Home/Home';
import RightSideBar from '../RightSideBar/RightSideBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const HomeOverview = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
        <Grid item xs className="sideBar">
          <Paper className={classes.paper}><LeftSideBar></LeftSideBar></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}><Home></Home></Paper>
        </Grid>
        <Grid item xs className="sideBar">
          <Paper className={classes.paper}><RightSideBar></RightSideBar></Paper>
        </Grid></Grid>
        </div>
    );
};

export default HomeOverview;