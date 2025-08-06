<template>
  <section class="contact-section py-5">
    <div class="container">
      <h2 class="text-center mb-4" data-aos="fade-down">Get in Touch</h2>
      <div class="row justify-content-center">
        <div class="col-md-6" data-aos="zoom-in">
          <form @submit.prevent="submitForm" class="p-4 rounded shadow bg-dark text-white">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="form.name" type="text" id="name" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="form.email" type="email" id="email" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input v-model="form.subject" type="text" id="subject" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea v-model="form.message" id="message" rows="4" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form Submitted:', this.form);
      alert('Thank you for your message!');
      this.form = { name: '', email: '', subject: '', message: '' }; // Reset form
    }
  }
};
</script>

<style scoped>
.contact-section {
  background: url('https://images.unsplash.com/photo-1581090700227-4c4e4d1d4b62?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat fixed;
  color: white;
  position: relative;
}
.contact-section::after {
  content: "";
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
}
.contact-section .container {
  position: relative;
  z-index: 2;
}
form .form-control {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
}
form .form-control:focus {
  background: rgba(255,255,255,0.2);
  outline: none;
  box-shadow: none;
}
</style>
