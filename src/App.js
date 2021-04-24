import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import NewPost from './NewPost';
import PostDetail from './PostDetail';

let App = () => {

  const [ posts, setPosts ] = useState( null )

  const appName = 'My Blog'

  useEffect( () => {
    //here needs to be fetch request
     setPosts(
       [
        { 
          "name": "post1", 
          "content":`s simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
        "author": "Alex Flok", 
        "id": 1 
      },
      { 
        "name": "post2", 
        "content":`s simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
      "author": "Alex Flok", 
      "id": 2 
    },
    { 
      "name": "post3", 
      "content":`s simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
    "author": "Alex Flok", 
    "id": 3 
  }
      ]
  )
  }, [] )

  const updateData = ( posts ) => {
      console.log(posts);
      setPosts( posts );
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation leftText={ appName } />
        <div className="content">
          <Switch>
              <Route exact path='/'>
                  { posts && <Posts posts={ posts } /> }
              </Route>
              <Route exact path='/newpost'>
                  {posts && <NewPost posts={ posts } addPost={ updateData } />}
              </Route>
              <Route exact path='/post/:id' >
                  {posts &&  <PostDetail posts={ posts } updatePost={ updateData } /> }
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
