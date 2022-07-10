import { Route, Routes, Redirect} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import SingleItem from './components/SingleItem/SingleItem';

import { connect } from "react-redux";

function App({ current }) {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route exact path="/cart" element={<Cart></Cart>} />
        {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" element={<SingleItem></SingleItem>} />
          )}
      </Routes>
    </main>
  );
}


const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
