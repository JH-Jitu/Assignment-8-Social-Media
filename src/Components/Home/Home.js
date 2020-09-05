import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from "../Post/Post";
import Container from '@material-ui/core/Container';




const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);


    return (
        <Container fixed>
        <div>
        
            {
                posts.map(post => <Post post={post} key={post.id}> </Post>)
            }
            
        </div>
        
        </Container>
    );
};

export default Home;