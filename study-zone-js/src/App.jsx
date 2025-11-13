import Home from './Home';
import Navbar from './navbar';


function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
