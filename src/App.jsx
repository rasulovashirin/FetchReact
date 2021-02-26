import './App.css'
import Home from './Home'
import Post from './Post'
import Header from './Header'

import { Switch, Route } from 'react-router-dom'

function App () {
    return (
    <>
     <Header />
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