import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
// import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart'
import BlogSingle from './components/Blog-single';
import ProductDetail from './components/ProductDetails';
import Blog from './components/Blog';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUs';
import NotFound from './components/404'

function App() {
  return (
    <div>
      <Router>
        {/* <Navigation /> */}
        <section className='container'>
          <Routes>
            <Route path = '/shop'               exact     element = {<Shop />} />
            <Route path = '/login'              exact     element = {<Login />} />
            <Route path = '/cart'               exact     element = {<Cart />} />
            <Route path = '/checkout'           exact     element = {<Checkout />} />
            <Route path = '/production details' exact     element = {<ProductDetail />} />
            <Route path = '/blog'               exact     element = {<Blog />} />
            <Route path = '/blogsingle'         exact     element = {<BlogSingle />} />
            <Route path = '/'                   exact     element = {<Login />} />
            <Route path = '/contactUs'          exact     element = {<ContactUs />} />
            <Route path = '/notfound'          exact     element = {<NotFound />} />


          </Routes>
        </section>
        {/* </Navigation> */}
      </Router>
    </div>
  );
}

export default App;
