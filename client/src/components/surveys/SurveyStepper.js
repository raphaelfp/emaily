import _ from 'lodash';
import React, { Component } from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import WIZARD_STEPS from './wizardSteps';

class SurveyStepper extends Component {
	state = {
		finished: false,
		stepIndex: 0
	};

	handleNext = () => {
		const { stepIndex } = this.state;
		this.setState({
			stepIndex: stepIndex + 1,
			finished: stepIndex >= WIZARD_STEPS.length - 1
		});
	};

	handlePrev = () => {
		const { stepIndex } = this.state;
		if (stepIndex > 0) {
			this.setState({ stepIndex: stepIndex - 1 });
		}
	};

	renderStepActions(step) {
		const { stepIndex } = this.state;

		return (
			<div style={{ margin: '12px 0' }}>
				<RaisedButton
					label={stepIndex === WIZARD_STEPS.length - 1 ? 'Finish' : 'Next'}
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.handleNext}
					style={{ marginRight: 12 }}
				/>
				{step > 0 &&
					<FlatButton
						label="Back"
						disabled={stepIndex === 0}
						disableTouchRipple={true}
						disableFocusRipple={true}
						onTouchTap={this.handlePrev}
					/>}
			</div>
		);
	}

	renderSteps() {
		return _.map(WIZARD_STEPS, ({ label, content }, index) => {
			return (
				<Step key={index}>
					<StepLabel>
						{label}
					</StepLabel>
					<StepContent>
						<p>
							{content}
						</p>
						{this.renderStepActions(index)}
					</StepContent>
				</Step>
			);
		});
	}

	render() {
		const { finished, stepIndex } = this.state;

		return (
			<div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
				<Stepper activeStep={stepIndex} orientation="vertical">
					{this.renderSteps()}
				</Stepper>
				{finished &&
					<p style={{ margin: '20px 0', textAlign: 'center' }}>
						<a
							href="#"
							onClick={event => {
								event.preventDefault();
								this.setState({ stepIndex: 0, finished: false });
							}}
						>
							Click here
						</a>{' '}
						to start again.
					</p>}
			</div>
		);
	}
}

export default SurveyStepper;
