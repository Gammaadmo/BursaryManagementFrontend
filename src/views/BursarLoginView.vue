<template>
  <div class="login-container">
    <h1>Bursar Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your email"
          class="input-field"
          aria-label="Email"
        />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
          class="input-field"
          aria-label="Password"
        />
      </div>
      <button
        type="submit"
        class="login-button"
        :disabled="isLoading"
      >
        <span v-if="isLoading" class="loading-spinner"></span>
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'BursarLogin',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.errorMessage = '';

      try {
        // Replace with actual login logic, like an API call
        console.log('Logging in', this.email, this.password);

        // Simulate successful login
        setTimeout(() => {
          this.isLoading = false;
          this.$router.push('/dashboard'); // Redirect to dashboard or other page
        }, 2000);
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = 'Login failed. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
/* Container to center the login form */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f7fc;
}

/* Title styling */
h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Login form container */
.login-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

/* Input group styling */
.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  font-weight: bold;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
}

.input-field {
  padding: 0.8rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

/* Login button styling */
.login-button {
  padding: 0.8rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:disabled {
  background-color: #b0d1f6;
  cursor: not-allowed;
}

.login-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.login-button:active:not(:disabled) {
  background-color: #004085;
}

/* Loading spinner */
.loading-spinner {
  border: 2px solid #fff;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Responsive styling */
@media (max-width: 600px) {
  .login-container {
    padding: 1rem;
  }

  .login-form {
    width: 100%;
    padding: 1.5rem;
  }
}

/* Spinner animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
