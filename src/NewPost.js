import './NewPost.css'
import { useState } from "react"
import { useHistory } from 'react-router-dom'

let NewPost = ( { posts, addPost } ) => {

    const [ name, setTitle] = useState('')
    const [ content, setContent] = useState('')
    const [ author, setAuthor] = useState('Alex Flok')

    const dom_navigation = useHistory();

    const createPost = (e) => {
            e.preventDefault();
            const newPost_obj = { name, content, author, id: posts.length+1 };
            posts.push( newPost_obj );
            addPost(posts);
            dom_navigation.push('/')
    }

    return(
        <div className="newPostPage">
            <h3>New Post</h3>
            <br></br>
            <form className='formBox' onSubmit={createPost}>
                <label className="af-form-element">Post Name</label>
                <input 
                type='text' 
                required 
                value={name}
                className="af-form-element"
                onChange = { ( e )=>{ setTitle( e.target.value ) } } 
                />
                <label className="af-form-element">Post Content</label>
                <textarea onChange = { ( e )=>{ setContent( e.target.value ) } } required className="af-form-element"></textarea>
                <label className="af-form-element">Author:</label>
                <select value={author} onChange = { ( e )=>{ setAuthor( e.target.value ) } } required className="af-form-element">
                    <option value="Alex Flok">Alex Flok</option>
                    <option value="Others">Others</option>
                </select>
                <button className="af-create-btn">Create New Post</button>
            </form>
        </div>
    )
}

export default NewPost