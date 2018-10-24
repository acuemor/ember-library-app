import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed'

export default DS.Model.extend({
  // Attrs
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  // Relations
  books: DS.hasMany('book'),

  // Validations
  isValid: notEmpty('name')
});
