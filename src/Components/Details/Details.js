import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '70ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const Details = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const classes = useStyles();


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])


    return (
        <Container className="postBorder" maxWidth="sm">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={friend.imgUrl} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={friend.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Post No: {friend.id} <br />
                                </Typography> <small>User ID: {friend.userId}</small> <br/>
                                {friend.body}
                            </React.Fragment>
                        }
                    />
                </ListItem> </List> <Button variant="contained"> <Link to="/home"> Back to Timeline </Link> </Button>
            <Container maxWidth="sm"> <Comment friendId={friendId}></Comment></Container>

            {/* Without Material UI and other styles. */}
            {/* <p>This is the id: {friendId}</p>
            <h2> Title: {friend.title}</h2>
            <p>Post: {friend.body}</p>
            <p>UserId: {friend.userId}</p>
            <Comment friendId={friendId}></Comment> */}
        </Container>
    );
};

export default Details;