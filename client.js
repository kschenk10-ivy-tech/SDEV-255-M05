// display results from browser in the console
const axios = require("axios").default;
const url = 'http://localhost:3000/';
const resultingPromise = axios.get(url); // gets the info from the browser
resultingPromise.then(processResolvedPromise); //plugs the results into the function to process

function processResolvedPromise(resultFromPromise) {
    let movieData = resultFromPromise.data; //stores the results in a variable for ease of

    console.log("promise resolved. result is: ");
    console.log("data shows: ");
    for (const row of movieData) {
        console.log(row);
    }
};

// run once,stand along program which makes one http request and stops