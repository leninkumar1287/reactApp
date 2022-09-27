import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart'
import BlogSingle from './components/Blog-single';
import ProductDetail from './components/ProductDetails';
import Blog from './components/Blog';
import Checkout from './components/Checkout';
// import Checkout from './components/Checkout'

function App() {
  return (
    <div>
      <Router>
        <Navigation>
        <section className='container'>
          <Routes>
            <Route  path='/navigation' element={<Navigation />}/>
            <Route  path='/shop' element={<Shop />}/>
            <Route  path='/login' element={<Login />}/>
            <Route  path='/cart' element={<Cart />}/>
            <Route  path='/blog-single' element={<BlogSingle />}/>
            <Route  path='/checkout' element={<Checkout />}/>
            <Route  path='/production details' element={<ProductDetail />}/>
            <Route  path='/blog' element={<Blog />}/>
            <Route  path='/blogsingle' element={<BlogSingle />}/>
            </Routes>
          </section>
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
