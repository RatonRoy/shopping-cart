import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from "react-redux";

import {
	loadCurrentItem,
	addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product }) => {
	const { title, description, price, image } = product;
	return (
		<div>
			<div className="img-container">
				<img src={image} alt="" />
			</div>
			<div>
				<div className='flex justify-between py-4'>
					<h2 className='text-blue-900'> {title} </h2>
					<p> {price} </p>
				</div>
				<p> {description} </p>
			</div>
			<div className= " flex justify-between my-2">
				<Link to={`/product/${product.id}`}>
					<button
						onClick={() => loadCurrentItem(product)}
						className= ""
					>
						View Item
					</button>
				</Link>
				<button
					onClick={() => addToCart(product.id)}
					className= "btn text-red-700"
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
	  addToCart: (id) => dispatch(addToCart(id)),
	  loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
	};
  };
  
  export default connect(null, mapDispatchToProps)(Product);