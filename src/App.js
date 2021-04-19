import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import NewPost from './NewPost';

let App = () => {

  const [ posts, setPosts ] = useState( null )

  const appName = 'My Blog'

  useEffect( () => {
    //here needs to be fetch request
     setPosts(
       [
        { "name": "post1", "author": "Alex Flok", "id": 1 },
        { "name": "post1", "author": "Alex Flok", "id": 2 },
        { "name": "post1", "author": "Alex Flok", "id": 3 }
      ]
  )
  }, [] )
  
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
                  <NewPost />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
