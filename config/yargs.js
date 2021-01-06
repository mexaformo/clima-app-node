
const argv = require( 'yargs' ).options( {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
} ).argv;

module.exports = { argv };

// http://api.openweathermap.org/data/2.5/weather?q=enterprise&appid=503858db6eed3ec2ad66507630aae3a2

