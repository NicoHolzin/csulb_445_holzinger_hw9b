console.log("Script loaded"); // Confirm script is loading

document.getElementById("callApiButton").addEventListener("click", () => {
  console.log("Button clicked"); // Confirm button is clicked

  const travelData = {
    name: "Nicolas",
    countries: [
      { name: "USA", year: 2024 },
      { name: "Belgium", year: 2024 },
      { name: "Austria", year: 2023 }
    ]
  };

  console.log("Data to be sent:", travelData); // Log data before sending

  // Call the API using fetch
  fetch("/api/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(travelData)
  })
  .then(response => {
    console.log("Response received:", response); // Confirm response is received
    return response.json();
  })
  .then(data => {
    console.log("Data received:", data); // Confirm data from API
    document.getElementById("resultMessage").textContent = data.message;
  })
  .catch(error => {
    console.error("Error during fetch:", error); // Log fetch errors
  });
});
