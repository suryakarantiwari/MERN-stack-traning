const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      `<h1>Blazeclan Technologies</h1>
      <img src='https://d1myhw8pp24x4f.cloudfront.net/software_logo/1585642370_blazeclan%20logo_mid.png' alt='logo' />`
    );
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(`<h1>Our Mission</h1>
    <p class="icon-text-body mr-4">We are on a revolutionary path of leading excellence on cloud; by offering robust yet dynamic cloud technology to leverage our capabilities of providing business flexibility, reduced operational costs, decreased time to market, and the security and scalability of enterprise workloads for our valuable customers.</p>
    <h1>Our Vision</h1>
    <p class="icon-text-body mr-4">We envision becoming a global leader in Cloud Consultancy through our invaluable and trustworthy customer service and experience.</p>
    `);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(
      `<div class="col-7 pt-3 pl-5">
      <h3 class="location-body-head">Blazeclan Technologies</h3>
      <p class="location-body-text">Godrej Eternia C, A-Wing, 8th Floor, <br>Old Pune-Mumbai Rd, Wakadewadi, Shivajinagar, Pune, Maharashtra 411005</p>
      <p class="location-body-text">Contact: 020-67611100
      <span style="font-weight: var( --e-global-typography-text-font-weight );"><br>Email: sales@blazeclan.com</span></p>
      
      </div>`
    );
  } else {
    const error = (res.statusCode = 404);
    res.end(`<h1>Wrong URL Status Code : ${error}</h1>`);
  }
});

server.listen(5000, () => {
  console.log("server");
});
