const request = require('request').defaults({json: true})
const url_rest = "http://crop.jakarta.go.id/ajax/apps_get_tj.php";
module.exports = function(koop){
    this.getData = function(req, callback){
        request(url_rest, (err, res, body) => {
            if (err) 
                return callback(err)
            // let conversion = JSON.parse(result);
            const result = {
                type: 'FeatureCollection',
                features: body.buswaytracking.map(formatFeature)
            };
            // const feature = {
            //     type: 'Feature',
            //     properties: realMerge,
            //     geometry: {
            //       type: 'Point',
            //       coordinates: [Number(lokasi._attributes.lon), Number(lokasi._attributes.lat)]
            //     }
            // };
            callback(null, result)
        })
    }
}

function formatFeature(inputFeature){
    const feature = {
        type: 'Feature',
        properties: inputFeature,
        geometry: {
            type: 'Point',
            coordinates: [inputFeature.longitude, inputFeature.latitude]
        }
    }
    return feature;
}

// body{
//     buswaytracking: 
//     [
//         {
//             buscode:"DMR 5049"
//             color:"MERAH KUNING"
//             course:15
//             current_tripid:"1.001"
//             dtd:0.534967
//             gpsdatetme:"2019-01-20 06:47:16"
//             koridor:"1"
//             latitude:-6.230629999999999
//             location:"1-2,1-3"
//             longitude:106.79860700000012
//             speed:31
//             trip_name:"BLOK M - KOTA"
//             voiceno:"08121000413"
//         }
//     ]
// }