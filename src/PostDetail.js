import './PostDetail.css'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';

const PostDetail = ( props ) => {
    const { id } = useParams();
    const [ post, setPost ] = useState( null )
    const link_nav = useHistory();
    
    useEffect( () => {
        setPost( props.posts.filter( post => post.id == id ) )
        console.log(post);
    }, [] )

    const removePost = () => {
        props.updatePost( props.posts.filter( post => post.id != id ) )
        link_nav.push('/');
    }

    return (
       <div id="POST-DETAIL">
           <div className="af-post-card">
           <h5>{ post && post[0].name }</h5>
           <p>{ post && post[0].content}</p>
           <b>Created by { post && post[0].author }</b>
           <br />
           <br />
           <br />
           <button className="af-delete-btn" onClick={ removePost }>Delete Post</button>
           </div>
       </div>
    )
}

export default PostDetail