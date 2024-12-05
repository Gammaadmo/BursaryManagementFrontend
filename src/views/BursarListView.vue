<template>
    <div class="bursar-list-page">
      <!-- Page Heading -->
      <h1 class="page-heading">Meet our bursars</h1>
  
      <!-- Search Bar -->
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search bursars..."
          class="search-input"
        />
      </div>
  
      <!-- Bursar Cards -->
      <div class="bursar-list">
        <div
          v-for="bursar in filteredBursars"
          :key="bursar.id"
          class="bursar-card"
        >
          <div class="bursar-avatar">
            <img :src="bursar.avatar || placeholderAvatar" alt="Avatar" />
          </div>
          <div class="bursar-info">
            <h2 class="bursar-name">{{ bursar.name }}</h2>
            <p class="bursar-email">{{ bursar.email }}</p>
            <span
              class="bursar-status"
              :class="{
                active: bursar.status === 'Active',
                inactive: bursar.status === 'Inactive',
              }"
            >
              {{ bursar.status }}
            </span>
            <div class="button-container">
              <button
                @click="viewBursar(bursar.id)"
                class="details-btn yellow-btn"
              >
                View Profile
              </button>
              <button class="details-btn blue-btn">View Details</button>
              <button class="details-btn default-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BursarListPage",
    data() {
      return {
        searchQuery: "",
        placeholderAvatar: "https://via.placeholder.com/100",
        bursars: [
          {
            id: 1,
            name: "Gammaad ",
            email: "gammaadmo@gmail.com",
            status: "Active",
            avatar: "",
          },
          {
            id: 2,
            name: "Oyola",
            email: "Oyola@gmail.com",
            status: "Inactive",
            avatar: "",
          },
          {
            id: 3,
            name: "Zuvuyo",
            email: "Zuvuyo@gmail.com",
            status: "Active",
            avatar: "",
          },
        ],
      };
    },
    computed: {
      filteredBursars() {
        return this.bursars.filter((bursar) =>
          bursar.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      viewBursar(id) {
        this.$router.push({ name: "BursarProfile", params: { id } });
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Page Styling */
  .bursar-list-page {
    font-family: 'Arial', sans-serif;
    background-color: #e3f2fd; /* Light blue background */
    padding: 20px;
    min-height: 100vh;
  }
  
  /* Page Heading Styling */
  .page-heading {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
    font-family: 'Georgia', serif;
  }
  
  /* Search Bar Styling */
  .search-container {
    margin: 20px auto;
    text-align: center;
  }
  
  .search-input {
    padding: 12px;
    border: 2px solid #90caf9; /* Blue border */
    border-radius: 30px;
    width: 350px;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0px 4px 10px rgba(144, 202, 249, 0.3); /* Blue glow */
  }
  
  /* Bursar List Styling */
  .bursar-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    justify-items: center;
  }
  
  /* Bursar Card Styling */
  .bursar-card {
    background: #ffffff; /* White background */
    border-radius: 16px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    padding: 20px;
    max-width: 300px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .bursar-card:hover {
    transform: scale(1.08);
    box-shadow: 0px 8px 20px rgba(144, 202, 249, 0.4); /* Blue glow */
  }
  
  .bursar-avatar img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #90caf9; /* Blue border */
  }
  
  .bursar-info {
    text-align: center;
  }
  
  .bursar-name {
    font-size: 1.6rem;
    color: #333;
    font-weight: 600;
  }
  
  .bursar-email {
    font-size: 1rem;
    color: #555;
  }
  
  .bursar-status {
    display: inline-block;
    margin: 12px 0;
    padding: 7px 18px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: bold;
  }
  
  .bursar-status.active {
    background-color: #d4f8e4;
    color: #2d7d46;
  }
  
  .bursar-status.inactive {
    background-color: #ffe8e8;
    color: #d44b4b;
  }
  
  /* Buttons */
  .button-container {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px; /* Spacing between buttons */
  }
  
  .details-btn {
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .details-btn.yellow-btn {
    background-color: #ffd54f; /* Yellow button */
    color: #333;
  }
  
  .details-btn.yellow-btn:hover {
    background-color: #ffcc00;
  }
  
  .details-btn.blue-btn {
    background-color: #64b5f6; /* Blue button */
    color: white;
  }
  
  .details-btn.blue-btn:hover {
    background-color: #42a5f5;
  }
  
  .details-btn.default-btn {
    background-color: #90caf9; /* Lighter blue button */
    color: white;
  }
  
  .details-btn.default-btn:hover {
    background-color: #64b5f6;
  }
  </style>
  