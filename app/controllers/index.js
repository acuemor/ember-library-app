import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  emailAddress: "",
  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),
  headerMessage: "Comming Soon",

  actions: {
    saveInvitation() {
      const email = this.emailAddress;
      // Invitation es el modelo, y email es uno de los campos que tiene el modelo
      const newInvitation = this.store.createRecord("invitation", {
        email: email
      });
      newInvitation.save()
      .then((response) => {
        this.set("responseMessage", `Thank you! We've just saved your email address: ${this.get("emailAddress")}`);
        this.set("emailAddress", "");
      })
      .catch((reason) => {
        // console.error('Error con la promesa. Razón: ' + reason);
      });
    }
  }

  // Es más correcto poner: isDisabled: match('emailAddress'...), que es una computed property predefinida que existe

  //   isDisabled: computed('emailAddress', function() {
  //     return this.emailAddress === '';
  //   })
});
