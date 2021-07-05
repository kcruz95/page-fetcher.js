const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Downloaded and saved ${response.headers} bytes to ${path}`);
    }
  });
});
