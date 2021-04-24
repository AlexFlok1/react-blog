import './Posts.css'
import { useEffect, useState } from 'react'

const Posts = ( props ) => {

   const [ allposts, setPosts ] = useState( null )

   useEffect( () => {
        setPosts( props.posts )
   }, [ props ] )

    return(
        <div className="posts-box">
            <h3>My Posts</h3>
            {
                allposts && allposts.map( post => (
                    <div className="post" key={ post.id }>
                       <p 
                       style={ 
                           { 
                               fontWeight:'bold', 
                               display:'flex',
                               fontSize:'20px',
                               alignItems:'center',
                               justifyContent:'center',
                               flex:'50%'
                               
                            } 
                        }> {  post.name } </p>
                       <p className='author' style={ 
                           { 
                               display:'flex',
                               alignItems:'center',
                               justifyContent:'center',
                               flex:'50%'
                            } 
                        }>{ post.author }</p>
                    </div>
                ) )
            }
        </div>
    )

}

export default Posts