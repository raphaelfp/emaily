const sendgrid = require('sendgrid');
const keys = require('../config/keys');

const helper = sendgrid.mail;

module.exports = class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email('no-reply@raphaelfp.com');
		this.subject = subject;
		this.boby = new helper.Content('text/html', content);
		this.recipients = this.formatAdresses(recipients);

		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	formatAdresses(recipients) {
		return recipients.map(({ email }) => new helper.Email(email));
	}

	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new helper.Personalization();

		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			bocy: this.toJSON()
		});
		this.sgApi.API(request, (error, response) => {
			if (error) console.log('Error response received');
			return response;
		});
	}
};
