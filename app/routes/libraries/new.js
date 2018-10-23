import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries')); // transitionTo es igual a navigateTo de angular, para ir a una ruta concreta.
    },

	// Se ejecuta al hacer una navegación a otra ruta, es decir, al abandonar la actual ruta.
    willTransition() {
      // Reinicia el modelo si no ha sido guardado en la base de datos
      this.controller.get('model').rollbackAttributes();
    }
  }
});