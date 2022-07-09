import React from 'react';

const Product = ({ product }) => {
	const { title, description, price, image } = product;
	return (
		<div>
			<div className="img-container">
				<img src={image} alt="" />
			</div>
			<div>
				<div>
					<h2> {title} </h2>
					<p> {price} </p>
				</div>
				<p> {description} </p>
			</div>
		</div>
	);
};

export default Product;