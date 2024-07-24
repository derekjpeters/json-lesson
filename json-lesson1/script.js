document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Fetch the JSON file named 'products.json'
      const response = await fetch('products.json');
  
      // Check if the response is ok (status is 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Convert the response to JSON
      const jsonObject = await response.json();
  
      // Extract the 'products' array from the JSON object
      const products = jsonObject.products;
      // Get the HTML element with the ID 'product-list' to display the products
      const productList = document.getElementById('product-list');
      // Get the HTML element with the ID 'search' for the search input field
      const searchInput = document.getElementById('search');
  
      // Define a function to display a list of products
      const displayProducts = (products) => {
        // Clear the current contents of the product list
        productList.innerHTML = '';
        // Iterate over each product in the list
        products.forEach(product => {
          // Create a new div element for each product
          const productDiv = document.createElement('div');
          // Add a class name 'product' to the new div
          productDiv.className = 'product';
          // Set the text content of the div to the product's details
          productDiv.textContent = `Name: ${product.name}, Category: ${product.category}, Price: $${product.price}`;
          // Append the new div to the product list container
          productList.appendChild(productDiv);
        });
      };
  
      // Display all products initially
      displayProducts(products);
  
      // Add an event listener to the search input field to filter products as the user types
      searchInput.addEventListener('input', (event) => {
        // Get the search term entered by the user, converted to lowercase
        const searchTerm = event.target.value.toLowerCase();
        // Filter the list of products to include only those whose name includes the search term
        const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchTerm)
        );
        // Display the filtered list of products
        displayProducts(filteredProducts);
      });
  
    } catch (error) {
      // Log any errors that occur during the fetch or JSON parsing
      console.error('Error fetching or processing JSON:', error);
      // Display an error message to the user
      const productList = document.getElementById('product-list');
      productList.innerHTML = `<div class="error">Failed to load products: ${error.message}</div>`;
    }
  });
  