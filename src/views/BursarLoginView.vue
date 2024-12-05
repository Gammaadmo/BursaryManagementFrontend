<template>
    <div class="login-container">
      <div class="login-card">
        <h1>Bursar Login</h1>
        <form @submit.prevent="login" class="login-form">
          <div class="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Enter your email"
              class="input-field"
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Enter your password"
              class="input-field"
            />
          </div>
          <button type="submit" class="login-button" :disabled="isLoading">
            <span v-if="isLoading" class="loading-spinner"></span>
            <span v-else>Login</span>
          </button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BursarLogin",
    data() {
      return {
        email: "",
        password: "",
        isLoading: false,
        errorMessage: "",
      };
    },
    methods: {
      async login() {
        this.isLoading = true;
        this.errorMessage = "";
  
        try {
          // Replace with actual login logic
          console.log("Attempting login with:", this.email, this.password);
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
          this.isLoading = false;
          this.$router.push("/dashboard");
        } catch (error) {
          this.isLoading = false;
          this.errorMessage = "Login failed. Please try again.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container for the Login Page */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #d9e8fc, #f0f4ff);
    padding: 1rem;
  }
  
  /* Main Card Styling */
  .login-card {
    background: #fff;
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    text-align: center;
  }
  
  /* Header Styling */
  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  /* Form Container */
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  /* Input Fields */
  .input-group label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .input-field {
    padding: 0.8rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    background: #f8f9fc;
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  .input-field:focus {
    border-color: #007bff;
    outline: none;
    background-color: #fff;
  }
  
  /* Login Button Styling */
  .login-button {
    padding: 0.8rem;
    background: #007bff;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .login-button:hover:not(:disabled) {
    background: #0056b3;
  }
  
  .login-button:disabled {
    background: #b0d1f6;
    cursor: not-allowed;
  }
  
  .login-button:active:not(:disabled) {
    transform: translateY(2px);
  }
  
  /* Loading Spinner Styling */
  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-top: 2px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  /* Error Message Styling */
  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1rem;
  }
  
  /* Animation for Loading Spinner */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Responsive Styles */
  @media (max-width: 600px) {
    .login-card {
      padding: 1.5rem;
    }
  }
  
  </style>
  