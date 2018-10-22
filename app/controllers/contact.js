import Controller from '@ember/controller';
import { match, gt, and, not } from '@ember/object/computed';

export default Controller.extend({
	emailAddress: '',
	message: '',
	emailAddressFormat: match('emailAddress', /^.+@.+\..+$/),
	emailAddressSize: gt('message.length', 4),
	isValid: and('emailAddressFormat', 'emailAddressSize'),
  	isDisabled: not('isValid'),

	actions: {

		saveContactForm() {
		  this.set('responseMessage', `Thank you! We've just saved your form. Email: ${this.get('emailAddress')} - Message: ${this.get('message')}`);
		  this.set('emailAddress', '');
		  this.set('message', '');
		}
	  }
});
