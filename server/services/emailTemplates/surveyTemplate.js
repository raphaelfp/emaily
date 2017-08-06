const keys = require('../../config/keys');

module.exports = survey => {
	return `
		<html>
		<body>
			<div style="text-align:center;">
				<h3>I'd like Your inpunt!</h3>
				<p>Please enter the following question:</p>
				<p>${survey.body}</p>
				<div>
					<a href="${keys.url}/api/surveys/feedback">Yes</a>
				</div>
				<div>
					<a href="${keys.url}/api/surveys/feedback">No</a>
				</div>
			</div>
		</body>
		</html>
	`;
};
