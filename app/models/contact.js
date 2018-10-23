import DS from 'ember-data';
import { match, gt, and, not } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  
  emailAddressFormat: match("email", /^.+@.+\..+$/),
  emailAddressSize: gt("message.length", 4),
  isValid: and("emailAddressFormat", "emailAddressSize"),
  isDisabled: not("isValid"),

});
