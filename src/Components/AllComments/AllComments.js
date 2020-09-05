import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '50ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));
const AllComments = (props) => {
    const {name, email, body, postId, id} = props.comment;
    // console.log(props.comment)
    // const {image} = props;
    const classes = useStyles();
    
    const [image, setImage] = useState([])

    useEffect(()=> {
        const url = `https://api.randomuser.me/?results=5/results`
        fetch(url)
        .then(res => res.json())
        .then(data => { setImage(data.results.find(picture => picture={picture}).picture.large)})
    }, [])
    
        // console.log(image)

    return (
        <Container className="postBorder" maxWidth="sm">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Post No: {postId} <br />
                                </Typography> <small>Comment No: {id}, Email: {email}</small> <br />
                                {body}
                            </React.Fragment>
                        }
                    />
                </ListItem> </List>

                {/* Without Material UI and style */}
            {/* <div className="container">
            <h2>Name: {name}</h2>
           <h5>Email: {email}</h5>
           <p>Body: {body}</p>
           photo: <img src={image} alt=""/>
           <p><small>Post ID: {postId}</small> <small>Comment No: {id}</small></p>
        </div> */}
        </Container>


        
    );
};

export default AllComments;