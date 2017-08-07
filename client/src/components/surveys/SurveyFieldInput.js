import React, { Component } from 'react';

class SurveyFieldInput extends Component {
	state = { active: false };

	handleFocus() {
		this.setState({
			active: true
		});
	}

	inputClassName() {
		const { error, touched } = this.props.meta;
		const valid = touched && error ? 'invalid' : 'valid';
		return `validate ${valid}`;
	}

	render() {
		const {
			input,
			type,
			label,
			reviewForm,
			readOnly,
			meta: { error, submitFailed }
		} = this.props;
		return (
			<div className="input-field">
				<input
					{...input}
					id={input.name}
					onFocus={this.handleFocus.bind(this)}
					type={type}
					className={this.inputClassName()}
					readOnly={readOnly}
				/>
				<label
					className={
						reviewForm || this.state.active || (submitFailed && error)
							? 'active'
							: ''
					}
					htmlFor={input.name}
					data-error={error}
				>
					{label}
				</label>
			</div>
		);
	}
}

export default SurveyFieldInput;
