import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart'
import FourNotFour from './components/FourNotFour'

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
            <Route  path='/fourNotFour' element={<FourNotFour />}/>
          </Routes>
          </section>
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
