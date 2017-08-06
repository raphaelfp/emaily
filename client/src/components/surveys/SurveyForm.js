import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyFieldInput from './SurveyFieldInput';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title',
		noValueError: 'You must provide a survey title'
	},
	{
		label: 'Subject Line',
		name: 'subject',
		noValueError: 'You must provide a subject line'
	},
	{
		label: 'Email Body',
		name: 'body',
		noValueError: 'You must provide a email body'
	},
	{
		label: 'Recipients List',
		name: 'emails',
		noValueError: 'You must provide a recipients list'
	}
];

class SurveyForm extends Component {
	handleForm(fields) {
		console.log(fields);
	}

	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field
					component={SurveyFieldInput}
					type="text"
					label={label}
					name={name}
					key={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.handleForm.bind(this))}>
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

	errors.emails = validateEmails(values.emails || '');

	_.each(FIELDS, ({ name, noValueError }) => {
		if (!values[name]) errors[name] = noValueError;
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
