

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


export function getAllProducts(data) {
	return dispatch => new Promise((resolve, reject) => {

		const addIndex = data.products.map(product => {
			return {...product, id: uuidv4()};
		});

		dispatch({
			type: "ADD_ALL_PRODUCTS",
			data: addIndex,
		})
		dispatch({
			type: 'ADD_PRICING_INFO',
			data: data.pricingInfo
		})
	})
}



export function editProduct(data) {
	return dispatch => new Promise((resolve, reject) => {
		dispatch({
			type: 'EDIT_PRODUCT',
			data,
		})
		resolve({ success: true })
	})
}












