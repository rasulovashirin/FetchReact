import './App.css'
import Home from './Home'
import Post from './Post'

import { Switch, Route } from 'react-router-dom'

function App () {
    return (
    <>

     <Switch>
       <Route path = "/" exact>
       <Home />
       </Route>
       <Route path = "/post/:postnumber" exact>
       <Post />
       </Route>
     </Switch>

    </>
  )
}

export default App