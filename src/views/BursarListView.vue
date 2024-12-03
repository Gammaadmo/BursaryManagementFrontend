<template>
    <div class="bursar-list-container">
      <h1 class="page-title">Bursar List</h1>
      <div class="bursar-list">
        <div v-for="bursar in bursars" :key="bursar.id" class="bursar-item">
          <h2 class="bursar-name">{{ bursar.name }}</h2>
          <p class="bursar-email">{{ bursar.email }}</p>
          <p class="bursar-status">{{ bursar.status }}</p>
          <button @click="viewBursar(bursar.id)" class="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarListView',
    data() {
      return {
        // Sample bursar data (replace with actual data from API or data source)
        bursars: [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
          { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', status: 'Active' },
        ],
      };
    },
    methods: {
      viewBursar(id) {
        this.$router.push({ name: 'BursarProfile', params: { id } });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Bursar List Page Styles */
  .bursar-list-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .page-title {
    text-align: center;
    color: #0056b3;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .bursar-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .bursar-item {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .bursar-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .bursar-email,
  .bursar-status {
    font-size: 1rem;
    color: #777;
  }
  
  .view-details-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .view-details-btn:hover {
    background-color: #0056b3;
  }
  </style>
  