import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill} from 'react-icons/bs';

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <section className="bg-blue-600  p-4 text-white flex justify-between">
      <Link to="/">
        <h2 className= ""> Berger Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className= "">
			<h3 className="">Cart
				<BsFillCartCheckFill/>
			</h3>
          <div className= "">{cartCount}</div>
        </div>
      </Link>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
