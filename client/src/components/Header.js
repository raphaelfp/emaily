import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeWrapper from './StripeWrapper';

class Header extends Component {
	renderLoginButton() {
		switch (this.props.auth) {
			case null:
				return '';
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="stripe-wrapper">
						<StripeWrapper />
					</li>,
					<li key="credits" style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="logout">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						className="left brand-logo"
						to={this.props.auth ? '/surveys' : '/'}
					>
						Emaily
					</Link>
					<ul className="right">
						{this.renderLoginButton()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
