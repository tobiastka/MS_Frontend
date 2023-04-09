import { Route } from 'wouter'
import Navbar from './components/Navbar' //./components/NavBar
import './stylesheets/app.css'
import Home from './pages/Home'
function App() {
  return (

    <div className='app'>
      <Navbar />
      <Route path='/' component={Home} />
    </div>
  )
}

export default App
