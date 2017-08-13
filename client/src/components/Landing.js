import React from 'react';
import SurveyStepper from './surveys/SurveyStepper';

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Emaily</h1>
			<h5>Collect feedback from your users</h5>
			<SurveyStepper />
		</div>
	);
};

export default Landing;
