import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllComments from '../AllComments/AllComments';

const Comment = () => {
    const {friendId} = useParams();
    const [comment, setComment] = useState([]);

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setComment(data); console.log(data)})
    }, [])
    
    return (
        <div>
            <h6 align="right" style={{color:"gray"}}>Comments:<small> {comment.length}</small></h6>
            {
                comment.map(comment => <AllComments comment={comment} key={comment.id}> </AllComments>)
               
            }

        </div>
    );
};

export default Comment;