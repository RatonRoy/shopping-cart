import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className= "">
      <img
        className= ""
        src={current.image}
        alt={current.title}
      />
      <div className= "">
        <p className= "">{current.title}</p>
        <p className= "">{current.description}</p>
        <p className= "">$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className= ""
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
