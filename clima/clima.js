const axios = require('axios');



const getclima = async (lat,lng) =>{


const  resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8d87de2007732e5fd9e07645063a6fe9`)

return resp.data.main.temp;
}

module.exports={
    getclima
}