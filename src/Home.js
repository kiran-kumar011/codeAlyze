import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
;
class Home extends Component {

	state = {

	}

	editProduct = (data) => {
		this.props.history.push({
			pathname: '/edit-product',
			state: {
				id: data.id,
			}
		});
	}


	render() {
		var { products } = this.props;
		return(
			<div>
				<div className='products-list-wrapper'>
					{
						products.map((product, index) => {
							return 	<ul className='product-wrapper' key={index}>
												<li className='table-list'><h2>name</h2><p className='colon'>:</p>
													<p className='product-description'>{product.name}</p>
												</li>					
												<li className='table-list'><h2>weight</h2><p className='colon'>:</p>
													<p className='product-description'>{product.weight}</p>
												</li>
												<li className='table-list'><h2>availability</h2><p className='colon'>:</p>
													<p className='product-description'>{product.availability}</p>
												</li>
												<li className='table-list'><h2>is editable</h2><p className='colon'>:</p>
													<p className='product-description'>{product.isEditable ? 'true' : 'false'}</p>
												</li> 
												{
													product.isEditable ? 
													<button onClick={() => this.editProduct(product)} className='edit-button'>edit</button>
													: 
													''
												}
											</ul>
						})
					}
				</div>
			</div>
		) 
	}
}




function mapStateToProps(state) {
	return {
		products: state.products,
	}
}

export default connect(mapStateToProps)(Home);