import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.createRecord("contact");
  },

  actions: {
    saveContactForm(newContact) {
      newContact
        .save()
        .then(() => {
          this.controller.set(
            "responseMessage",
            `Thank you! We've just saved your form. Email: ${
              newContact.email
            } - Message: ${newContact.message}`
          );
          this.controller.set("model.email", "");
          this.controller.set("model.message", "");
        })
        .catch(reason => {
        //   console.error("Error con la promesa. Razón: " + reason);
        });
    },

    willTransition() {
      this.controller.get("model").rollbackAttributes();
      this.controller.set("responseMessage", false);
    }
  }
});
