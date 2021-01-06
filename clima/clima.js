

const axios     = require('axios');

const getClima = async ( lat, lng ) => {
        
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=503858db6eed3ec2ad66507630aae3a2&units=metric`,
        //headers: {'appid': '503858db6eed3ec2ad66507630aae3a2'}
    });
    const { data } = await instance.get();

    if ( !data ) {
      console.log( data )  
    } else {     
        return {
          temp: data.main.temp,
        }
    }    
};    


module.exports = {
    getClima     
}
