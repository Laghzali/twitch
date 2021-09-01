
import './App.css';
import Header from './Componants/Header/Header'
import Body from './Componants/Body/Body'
import Sidebar from './Componants/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='container'>
          <Sidebar/>
          <Body/>
        </div>
    </div>
  );
}

export default App;
