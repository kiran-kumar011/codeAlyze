import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProduct } from './actions'


class EditProduct extends Component {

	state = {
		name: '',
		weight: '',
		availability : '',
		productUrl : '',
		pricingTier: '',
		priceRange: '',
	}

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value });
	
	}


	submitChanges = (e) => {
		this.setState({[e.target.name] : e.target.value});
	}


	handleSubmit = (e) => {
		e.preventDefault();

		var { name, weight, availability, productUrl, pricingTier, priceRange } = this.state;
		var data = {
			name,
			weight,
			availability ,
			productUrl ,
			pricingTier,
			priceRange,
			id: this.props.location.state.id,
		}

		this.props.dispatch(editProduct(data)).then(res => {
			if(res.success) {
				this.props.history.push('/');
			}
		});

	}



	render() {
		var { name, weight, productUrl, pricingTier, priceRange } = this.state;
		var price = this.state.pricingTier ? this.props.pricing[this.state.pricingTier] : [] ;
		

		return(
			<div>
				<form className='edit-form'>
					<input className='input' onChange={this.handleChange} 
					type='text' name='name' placeholder='enter product name' ></input>
					<input className='input' onChange={this.handleChange} 
					type='number' name='weight' placeholder='enter the weight'></input>
					<input className='input' onChange={this.handleChange} 
					type='number' name='availability' placeholder='enter quantities available'></input>
					<input className='input' onChange={this.handleChange} 
					type='text' name='productUrl' placeholder='enter product url'></input>
					
					<div className='radioButton'>
						<input onChange={this.handleChange} type="radio" name="pricingTier" value="premier"/> premier<br/>
						<input onChange={this.handleChange} type="radio" name="pricingTier" value="budget"/> budget<br/>
					</div>
					{
						this.state.pricingTier ? 
						(
							<div className="field">
							  <div className="control">
							    <div className="select is-info">
							      <select name='priceRange' onChange={this.submitChanges}>
							        <option>Select price range </option>
							        {
							        	price.map((priceRange, id) => {
							        		return <option key={id}>{priceRange}</option>
							        	})
							        }
							      </select>
							    </div>
							  </div> 
							</div>
						)
						:
						''
					}
					{
						name && weight && productUrl && pricingTier && priceRange ? 
						<button className='edit-button' onClick={this.handleSubmit}>submit</button> 
						: 
						''
					}
				</form>
			</div>
		)
	}
} 


function mapStateToProps(state) {
	return {
		pricing: state.pricing,
	}
}


export default connect(mapStateToProps)(EditProduct);



