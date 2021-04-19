import './Posts.css'

const Posts = ( { posts } ) => {

    return(
        
        <div className="posts-box">
            <h3>My Posts</h3>
            {
                posts.map( post => (
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