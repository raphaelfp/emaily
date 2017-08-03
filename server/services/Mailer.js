const sendgrid = require('sendgrid');
const keys = require('../config/keys');

const helper = sendgrid.mail;

module.exports = class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

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
};
