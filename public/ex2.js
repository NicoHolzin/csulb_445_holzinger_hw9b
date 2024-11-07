document.getElementById("callApiButton").addEventListener("click", () => {
  // Prepare JSON data to send in the POST request
  const travelData = {
    name: "Nicolas",
    countries: [
      { name: "USA", year: 2024 },
      { name: "Belgium", year: 2024 },
      { name: "Austria", year: 2023 }
    ]
  };

  // Call the API using fetch
  fetch("/api/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(travelData) // Fixed: Use travelData here
  })
  .then(response => response.json())
  .then(data => {
    // Display the response message in the HTML
    document.getElementById("resultMessage").textContent = data.message;
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
