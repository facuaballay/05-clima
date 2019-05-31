
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

  const lugar = require('./lugar/lugar');
  const clima = require('./clima/clima');  

// lugar.getLugarLatLng(argv.direccion).then((data)=>console.log(data))
// .catch((err)=>{
//     console.log(err);
// })

// clima.getclima(40.750000,-74.000000).then(console.log).catch(console.log)


const getinfo= async (direccion) =>{
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getclima(coordenadas.lat,coordenadas.lng);
    return `El clima de ${coordenadas.direccion} es de ${temp}.`;
    } catch(e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}
getinfo(argv.direccion).then(console.log).catch(console.log);