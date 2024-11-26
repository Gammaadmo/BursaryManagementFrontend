<template>
  <div class="application-form">
    <h2>Bursary Application Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="course">Course:</label>
        <input type="text" v-model="formData.course" required />
      </div>
      <div class="form-group">
        <label for="statement">Statement of Purpose:</label>
        <textarea v-model="formData.statement" required></textarea>
      </div>
      <button type="submit" class="submit-button">Submit Application</button>
    </form>
    <div v-if="submitted" class="success-message">
      <p>Application submitted successfully!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        course: '',
        statement: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      this.submitted = true;

      // Clear the form after submission
      this.formData = {
        name: '',
        email: '',
        course: '',
        statement: '',
      };
    },
  },
};
</script>

<style scoped>
.application-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0077b6;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #0077b6;
  outline: none;
}

textarea {
  height: 100px;
}

.submit-button {
  background-color: #0077b6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-button:hover {
  background-color: #005a8a;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
}
</style>