import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
	render() {
		return (
			<StripeCheckout
				name="Emaily"
				description="$5 for 5 email credits"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<a>Add Credits</a>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(StripeWrapper);
