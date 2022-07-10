import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
	products: [
	  {
		id: 1,
		title: "Chilli burger With Pepper Relish",
		description:
		  "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
		price: 500.0,
		image:
		  "https://i.ibb.co/DKctkY4/berger5.jpg",
	  },
	  {
		id: 2,
		title: "Perfect Lamb Satay Burger",
		description:
		  "Succulent lamb burgers with the crunchiness of cashew nuts and the creaminess of peanut butter smothered with a gorgeous satay sauce.",
		price: 450.0,
		image:
		  "https://i.ibb.co/5YBstYX/berger4.jpg",
	  },
	  {
		id: 3,
		title: "Lamb and Tomato Stuffed Burger",
		description:
		  "A perfectly shaped lamb pattie cooked to perfection. The tomatoes aren't just a topping but the spotlight of this beautiful dish.",
		price: 750.0,
		image:
		  "https://i.ibb.co/55LdCDn/berger3.jpg",
	  },
	  {
		id: 4,
		title: "Crunchy Chicken and Fish Burger",
		description:
		  "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
		price: 700.0,
		image:
		  "https://i.ibb.co/rmjHRGW/berger2.jpg",
	  },
	  {
		id: 5,
		title: "Chicken Feta Cheese Burger With Potato Salad",
		description:
		  "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
		price: 750.0,
		image:
		  "https://i.ibb.co/wY03G08/berger1.jpg",
	  },
	  {
		id: 6,
		title: "Lentil and Mushroom Burger",
		description:
		  "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
		price: 850.0,
		image:
		  "https://i.ibb.co/SPwKFP6/berger6jpg.jpg",
	  },
	],
	cart: [],
	currentItem: null,
};
  
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	  case actionTypes.ADD_TO_CART:
	 	 // Great Item data from products array
		const item = state.products.find(
		  (product) => product.id === action.payload.id
		);
		// Check if Item is in cart already
		const inCart = state.cart.find((item) =>
		  item.id === action.payload.id ? true : false
		)
   
		return {
		   ...state,
		  cart: inCart
			? state.cart.map((item) =>
				item.id === action.payload.id
				  ? { ...item, qty: item.qty + 1 }
				  : item
			  )
			: [...state.cart, { ...item, qty: 1 }], 
		};
	  case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id)};
	  case actionTypes.ADJUST_ITEM_QTY:
		return {
		  ...state,
		  cart: state.cart.map((item) =>
			item.id === action.payload.id
			  ? { ...item, qty: +action.payload.qty }
			  : item
		  ),
		};
	  case actionTypes.LOAD_CURRENT_ITEM:
		return {
		   ...state,
		  currentItem: action.payload, 
		};
	  default:
		return state;
	}
  };
  
  export default shopReducer;
  