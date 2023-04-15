import CartIcon from '../icons/Cart'
import '../stylesheets/Navbar.css'
import { Link, useLocation } from 'wouter'

const Navbar = () => {
  const [location, setLocation] = useLocation()
  console.log(location)
  return (
    <nav className='ms-navbar'>

      <div className='ms-navbar-logo'>
        <img className='ms-navbar-logo-img' src='./manga_store_logo.png' alt='' />
      </div>

      <div className='ms-navbar-items'>
        <div className='ms-navbar-pages'>
          <Link className={`ms-navbar-pages-item ${location === '/' && 'active'}`} href='/'>Home</Link>
          <Link className={`ms-navbar-pages-item ${location === '/shop' && 'active'}`} href='/shop'>Shop</Link>
          <Link className={`ms-navbar-pages-item ${location === '/news' && 'active'}`} href='/news'>News</Link>
          <Link className={`ms-navbar-pages-item ${location === '/faqs' && 'active'}`} href='/faqs'>FAQs</Link>
          <Link className={`ms-navbar-pages-item ${location === '/order' && 'active'}`} href='/order'>Order Status</Link>

        </div>
        <div className='ms-navbar-profile'>
          <div className='ms-navbar-profile-login'>
            <Link className='ms-navbar-profile-link' href='/'>CREAR CUENTA</Link>
            <Link className='ms-navbar-profile-link' href='/'>INICIAR SESIÓN</Link>
          </div>

          <div className='ms-navbar-profile-cart'>
            <CartIcon className='ms-navbar-profile-cart-img' />
          </div>

        </div>

      </div>

    </nav>

  )
}

export default Navbar
