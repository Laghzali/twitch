
import './App.css';
import Header from './Componants/Header/Header'
import Home from './Componants/Body/Body'
import Sidebar from './Componants/Sidebar/Sidebar'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <div className='container'>
          <Sidebar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/videos' exact  render={(props) => (<Home {...props} path="videos"/>)}/>
            <Route path='/videos/music'  exact  render={(props) => (<Home {...props} path="videos" category='music' />)}/>
            <Route path='/videos/irl' exact   render={(props) => (<Home {...props} path="videos" category='irl' />)}/>
            <Route path='/videos/games'   exact render={(props) => (<Home {...props} path="videos" category='games' />)}/>
            <Route path='/videos/esports' exact   render={(props) => (<Home {...props} path="videos" category='esports' />)}/>
            <Route path='/lives/music'  exact  render={(props) => (<Home {...props} path="lives" category='music' />)}/>
            <Route path='/lives/irl' exact   render={(props) => (<Home {...props} path="lives" category='irl' />)}/>
            <Route path='/lives/games'   exact render={(props) => (<Home {...props} path="lives" category='games' />)}/>
            <Route path='/lives/esports' exact   render={(props) => (<Home {...props} path="lives" category='esports' />)}/>
            <Route path='/lives'   render={(props) => (<Home {...props} path="lives" />)}/>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
