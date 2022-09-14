const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9fe359cfb0msh1529209e588a2a0p1c41b5jsn81f792d6947e",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch("https://weatherapi-com.p.rapidapi.com/astronomy.json?q=London", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.astronomy.astro);
    console.log(`Sunrise : ${response.astronomy.astro.sunrise}`);
    console.log(`Sunset : ${response.astronomy.astro.sunset}`);
    console.log(`Moonrise : ${response.astronomy.astro.moonrise}`);
    console.log(`Moonset : ${response.astronomy.astro.moonset}`);
  })
  .catch((err) => console.error(err));
