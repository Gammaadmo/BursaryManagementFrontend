<template>
    <div class="login-container">
      <h1>Bursar Login</h1>
      <form @submit.prevent="login" class="login-form">
        <div class="input-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="email"
            required
            placeholder="Enter your email"
            class="input-field"
          />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="password"
            required
            placeholder="Enter your password"
            class="input-field"
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarLogin',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Logic to handle bursar login
        console.log('Logging in', this.email, this.password);
        // Redirect to dashboard or handle authentication here
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
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .login-button:active {
    background-color: #004085;
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
  </style>
  