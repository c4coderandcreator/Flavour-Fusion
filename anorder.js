document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const datePicker = document.getElementById("datePicker");
    const orderHistoryContainer = document.getElementById("orderHistory");
  
    // Get the current date in the format yyyy-mm-dd
    const currentDate = new Date().toISOString().split('T')[0];
    datePicker.value = currentDate; // Set the date picker to the current date
  
    // Simulated order history data
    const orderHistoryData = [
      { date: "2023-08-17", order: " #12345 Salmon Salad x2, StoreName: FlavorFusion" },
      { date: "2023-08-17", order: " #12345 Fruit Salad x2,  StoreName: FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Salmon Salad x2, StoreName: FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Fruit Salad x2,  StoreName: FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Spaghetti x3,     StoreName: FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Pizza x3,        StoreName: FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Fruit Salad x2,  StoreName: FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Spaghetti x3,     StoreName: FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Pizza x3,        StoreName: FlavorFusion" },
      // .... (more data)
    ];
    // Function to filter orders and update the order history
    function updateOrderHistory(selectedDate) {
      orderHistoryContainer.innerHTML = ""; // Clear previous results
  
      const filteredOrders = orderHistoryData.filter(order => order.date === selectedDate);
  
      if (filteredOrders.length === 0) {
        orderHistoryContainer.textContent = "No orders found for the selected date.";
      } else {
        const orderList = document.createElement("ul");
        filteredOrders.forEach(order => {
          const orderItem = document.createElement("ul");
          orderItem.textContent = `Order: ${order.order}`;
          orderList.appendChild(orderItem);
        });
        const orderDate = document.createElement("p");
        orderDate.textContent = `Date: ${selectedDate}`;
        orderDate.classList.add("highlighted");
        orderHistoryContainer.appendChild(orderDate);
        orderHistoryContainer.appendChild(orderList);
      }
    }
    // Set up the initial order history display
    updateOrderHistory(currentDate);
  
    searchButton.addEventListener("click", function() {
      const selectedDate = datePicker.value;
      updateOrderHistory(selectedDate);
    });
  });
  
