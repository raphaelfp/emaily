import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyFieldInput from './SurveyFieldInput';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					component={SurveyFieldInput}
					type="text"
					label={label}
					name={name}
					key={name}
					reviewForm={this.props.reviewForm}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<h5>Please enter your campaign content</h5>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					<div className="input-field">
						{this.renderFields()}
					</div>
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) errors[name] = noValueError;
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
