import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({
	onCancel,
	formValues,
	reviewForm,
	submitSurvey,
	history
}) => {
	const fieldList = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} className="input-field">
				<input id={name} type="text" value={formValues[name]} disabled />
				<label className="active" htmlFor={name}>
					{label}
				</label>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{fieldList}
			<button className="red white-text btn-flat wi" onClick={onCancel}>
				Back
			</button>
			<button
				className="teal white-text btn-flat right"
				onClick={() => submitSurvey(formValues, history)}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
