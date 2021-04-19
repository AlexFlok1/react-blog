import './Navigation.css'

import { Link } from 'react-router-dom'

const Navigation = ( { leftText } ) => {

 return (
     <div id="NAV">
         <div className="leftText">
             <span style={ {
                 fontSize:'20px',
                 fontWeight:'bold'
             } }> { leftText } </span>
         </div>
         <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/newpost'>New Post</Link></li>
         </ul>
     </div>
 )
}

export default Navigation