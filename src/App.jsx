import { Route } from 'wouter'
import Navbar from './components/Navbar' // ./components/NavBar
import './stylesheets/app.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/index'
function App () {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Route path='/' component={Home} />
      </div>
    </Provider>
  )
}

export default App
