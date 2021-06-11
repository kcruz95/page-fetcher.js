const request = require("request"); //external files
const fs = require("fs");

//then internal files

const url = process.argv[2];
const filePath = process.argv[3];

function fetch(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Error: ${error}`)
      return;
    }
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log("Failed to write");
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    })
  }) 
}

fetch(url, filePath);
