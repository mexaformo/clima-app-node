const argv      = require('./config/yargs').argv;
const { getLugarLatLng } = require( './lugar/lugar' );
const clima               = require( './clima/clima' );

console.log('1')

const lasCoord = {};

const getInfo = async ( dir ) => {
    const coord = await getLugarLatLng( dir );
    const temp  = await clima.getClima( coord.lat, coord.lng );
    
    return temp;

};

getInfo( argv.direccion )
    .then( resp => {
      console.log( resp );
    })


// const ubicacion = getLugarLatLng( argv.direccion )
//   .then( ( coord ) => {
//     // console.log( coord )
//     lasCoord = coord;
//   });

// console.log( lasCoord );  
// clima.getClima( lasCoord.lat, lasCoord.lng )
//       .then( resp => console.log( resp ));

//console.log( elClima );

console.log('2')


//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=503858db6eed3ec2ad66507630aae3a2&units=metric
