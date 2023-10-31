document.addEventListener("DOMContentLoaded", function() {
    const searchButtonDate = document.getElementById("searchButtonDate");
    const searchButtonCafe = document.getElementById("searchButtonCafe");
    const datePicker = document.getElementById("datePicker");
    const cafeInput = document.getElementById("cafeInput");
    const orderHistoryContainer = document.getElementById("orderHistory");
  
    // Get the current date in the format yyyy-mm-dd
    const currentDate = new Date().toISOString().split('T')[0];
    datePicker.value = currentDate; // Set the date picker to the current date
  
    // Simulated order history data
    const orderHistoryData = [
      { date: "2023-08-17", order: " #12345 Salmon Salad x2", StoreName: "FlavorFusion" },
      { date: "2023-08-17", order: " #12345 Fruit Salad x2",  StoreName: "FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Salmon Salad x2", StoreName: "FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Fruit Salad x2",  StoreName: "FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Spaghetti x3",     StoreName: "FlavorFusion" },
      { date: "2023-08-16", order: " #12345 Pizza x3",        StoreName: "FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Fruit Salad x2",  StoreName: "FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Spaghetti x3",     StoreName: "FlavorFusion" },
      { date: "2023-08-18", order: " #12345 Pizza x3",        StoreName: "FlavorFusion" },
      // .... (more data)
    ];
    // Function to filter orders and update the order history
    function updateOrderHistory(selectedDate, selectedCafe=false) {
      orderHistoryContainer.innerHTML = ""; // Clear previous results
      let filteredOrders;
      const orderHeader = document.createElement("p");
      if (!selectedCafe){ // if not searching by cafe the date filtering runs
        filteredOrders = orderHistoryData.filter(order => order.date === selectedDate);
        orderHeader.textContent = `Date: ${selectedDate}`;
      } else {      // when searching by cafe this code will run
        filteredOrders = orderHistoryData.filter(order => order.StoreName.includes(selectedCafe));
        orderHeader.textContent = `Cafe: ${selectedCafe}`;
      }
      orderHeader.classList.add("highlighted");
      if (filteredOrders.length === 0) {
        orderHistoryContainer.textContent = "No orders found.";
      } else {
        const orderList = document.createElement("ul");
        filteredOrders.forEach(order => {
          const orderItem = document.createElement("ul");
          orderItem.textContent = `Order: ${order.order} Store Name: ${order.StoreName}`;
          orderList.appendChild(orderItem);
        });
        orderHistoryContainer.appendChild(orderHeader);
        orderHistoryContainer.appendChild(orderList);
      }
     // when searching by cafe this code will run

    }
    // Set up the initial order history display
    updateOrderHistory(currentDate);
  
    searchButtonDate.addEventListener("click", function() {
      const selectedDate = datePicker.value;
      updateOrderHistory(selectedDate);
    });
    
    searchButtonCafe.addEventListener("click", function () {
      const selectedCafe = cafeInput.value;
      updateOrderHistory(Date.now(), selectedCafe);

    })

  });
  
