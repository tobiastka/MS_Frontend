import { Route } from 'wouter'
import Navbar from './components/Navbar' // ./components/NavBar
import './stylesheets/app.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/index'
import Shop from './pages/Shop'
function App () {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Route path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </div>
    </Provider>
  )
}

export default App
