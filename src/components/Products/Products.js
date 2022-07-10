import React from 'react';

// Redux
import { connect } from "react-redux";
import Product from './Product/Product';

const Products = ({ products }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 gap-8'>
			{products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
	  products: state.shop.products,
	};
  };

export default connect(mapStateToProps)(Products);