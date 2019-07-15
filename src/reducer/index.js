

export function addAllProducts(state=[], action) {
	switch(action.type) {
		case "ADD_ALL_PRODUCTS":
			return action.data;
		case 'EDIT_PRODUCT':
			return [...state].map(product => {
				if(action.data.id === product.id) {
					return {...action.data, isEditable: true };
				} else {
					return product;
				}
			})
		default : 
			return state;
	}
}



export function addPricingInfo(state={}, action) {
	switch(action.type) {
		case 'ADD_PRICING_INFO':
			return action.data
		default: 
			return state;
	}
}


