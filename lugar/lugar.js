
const axios     = require('axios');

const getLugarLatLng = async ( ciudad ) => {
    
    const encodedUrl = encodeURI( ciudad );
    
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=503858db6eed3ec2ad66507630aae3a2`,
        //headers: {'appid': '503858db6eed3ec2ad66507630aae3a2'}
    });
    const { data } = await instance.get();

    if ( !data ) {
      console.log( data )  
    } else {     
        return {
          direccion: data.name,
          lng: data.coord.lon,
          lat: data.coord.lat
        }
    }    
};    


module.exports = {
    getLugarLatLng    
}
