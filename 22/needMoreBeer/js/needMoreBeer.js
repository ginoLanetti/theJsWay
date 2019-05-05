const grabRandomBeer = () => {
    // Fetching random beer data from API
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => response.json())
      .then(beers => {
        // API returns an array containg only one element: we get it
        const beer = beers[0];
        // Creating DOM element for some beer properties
        const nameElement = document.createElement("h2");
        nameElement.textContent = beer.name;
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = beer.description;
        const additionalInfo = document.createElement('p')
        additionalInfo.textContent = `Alcohol by volume: ${beer.abv}. Volume: ${beer.volume.value + beer.volume.unit}. First brewed on ${beer.first_brewed}`
        // Clear previous beer data
        const beerElement = document.getElementById("beer");
        beerElement.innerHTML = "";
        // Add beer info to the page
        beerElement.appendChild(nameElement);
        beerElement.appendChild(descriptionElement);
        beerElement.appendChild(additionalInfo);
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  
  // Grab a new beer when clicking the button
  document.getElementById("grabButton").addEventListener("click", grabRandomBeer);