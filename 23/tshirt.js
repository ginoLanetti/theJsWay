document.getElementById("buyButton").addEventListener("click", () => {
    // Create a new, empty FormData object
    const formData = new FormData();
    // Fill the object with key/value pairs
    formData.append("size", "L");
    formData.append("color", "blue");
    // Send data to the server
    fetch("http://localhost:3000/tshirt", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});