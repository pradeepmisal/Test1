var weather = require("./Weather.js");
var argv = require("yargs")
  .option("loc", {
    type: "string",
  })
  .help("help").argv;

weather(argv.loc, function (currentWeather) {
  console.log(currentWeather);
});