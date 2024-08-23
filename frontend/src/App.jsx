import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {RecoilRoot} from 'recoil';
import Courses from './components/courses';
import Header from './components/header';
import Cart from './components/cart';

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className='font-mono'>
          <Header/>
          {/* <Cart/> */}
          {/* <Courses/> */}
          <Routes>
              <Route path='/' element={<Courses/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}
