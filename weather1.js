var weather = require("./Weather.js");
var argv = require("yargs")
  .option("loc", {
    type: "string",
  })
  .help("help").argv;

weather(argv.loc, function (currentWeather) {
  console.log(currentWeather);
});


-------------



var request= require('request')
let key='b3aaa0b3323c0baab93aff38f75b44cb'
module.exports=function(location,callback){
     
let api= `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`

request({
    url:api,
    json:true
},function(error,response,body){
    if(error){
       callback('something went wrong');
    }else{
        callback(`Its ${body.main.temp} Max ${body.main.temp_max} ${body.name}`);
    }
})
}