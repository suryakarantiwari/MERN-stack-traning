const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9fe359cfb0msh1529209e588a2a0p1c41b5jsn81f792d6947e",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

document.getElementById("s").addEventListener("click", (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(`Temperature is : ${response.current.temp_c}`);
      console.log(`Humidity is : ${response.current.humidity}`);
      console.log(`Location is : ${response.location.name}`);
    })
    .catch((err) => console.error(err));
});
