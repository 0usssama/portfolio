<template>
  <div class="uk-container uk-margin-top">
    <h1
      class="uk-heading-small uk-text-bold uk-text-secondary uk-margin-small-top uk-margin-medium-bottom"
    >CONTACT ME</h1>

    <div class="uk-flex uk-flex-center" uk-grid>
      <p
        class="uk-text-bolder uk-text-large uk-width-3-4"
      >Do you need a business website? A website for your portfolio? Then you're on the right place. I'm more than willing to help you.</p>
    </div>

    <div class="uk-flex uk-flex-center uk-margin-large-bottom" uk-grid>
      <form class="uk-width-3-4" id="contact_form" v-on:submit.prevent="submitForm">
        <div v-show="errorMessage.length > 0" class="uk-alert-danger" uk-alert>
          <p v-html="errorMessage"></p>
        </div>
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">COMPLETE NAME</legend>

          <div class="uk-margin">
            <input
              v-model="name"
              v-on:blur="isValidName"
              class="uk-input change"
              type="text"
              placeholder="Put your name here"
            />
          </div>
          <legend class="uk-legend">SUBJECT</legend>

          <div class="uk-margin">
            <input
              v-model="subject"
              v-on:blur="isValidSubject"
              class="uk-input change"
              type="text"
              placeholder="Put your subject here"
            />
          </div>

          <div class="uk-margin">
            <textarea
              v-model="message"
              v-on:blur="isValidMessage"
              class="uk-textarea change"
              rows="5"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </fieldset>

        <button
          class="uk-button uk-button-default uk-width-1-4@m uk-text-bold"
          type="submit"
          style="background: #ffb400 !important; color: white"
        >submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "", // data for the name on the form
      subject: "", // data for the email on the form
      message: "", // data for the message on the form
      maxLength: 140, // maximum length of the form message
      errorMessage: "" // message to show the user if there is an error
    };
  },
  methods: {
    isValidName: function() {
      // TODO what if name is just spaces?
      var valid = this.name.length > 0;
      console.log("checking for a valid name: " + valid);
      return valid;
    },
    isValidSubject: function() {
      // TODO what if name is just spaces?
      var valid = this.subject.length > 0;
      console.log("checking for a valid subject: " + valid);
      return valid;
    },
    isValidMessage: function() {
      // what if message is just spaces?
      var valid =
        this.message.length > 0 && this.message.length < this.maxLength;
      console.log("checking for a valid message: " + valid);
      return valid;
    },
    submitForm() {
      this.errorMessage = "";
      if (!this.isValidName()) {
        // TODO what should the errorMessage look like for multiple
        //  messages?
        this.errorMessage += "Please include your name.<br>";
      } else {
        this.errorMessage += "";
      }

      if (!this.isValidSubject()) {
        // TODO what should the errorMessage look like for multiple
        //  messages?
        this.errorMessage += "Please include your subject.<br>";
      } else {
        this.errorMessage += "";
      }
      if (!this.isValidMessage()) {
        // TODO what should the errorMessage look like for multiple
        //  messages?
        this.errorMessage += "Please include your message.<br>";
      } else {
        this.errorMessage += "";
      }

      if (this.errorMessage.length > 0) {
        console.log("kayan errors");
      } else {
        document.location.href =
          "mailto:benounnas.oussama@protonmail.com?subject=" +
          encodeURIComponent(this.subject) +
          "&body=" +
          encodeURIComponent(this.message);
      }
    }
  }
};
</script>

<style>
input,
textarea {
  background: rgba(19, 33, 49, 0.95) !important;
  color: white !important;
  border-radius: 4px !important;
}
.change::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: white;
  font-weight: bold;
  opacity: 0.3;
}
.change:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: white;
  opacity: 0.1;
}
.change::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: white;
  opacity: 0.1;
}
.change:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}
</style>