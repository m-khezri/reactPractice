import axios from 'axios';

const getMake = new Promise((resolve, reject) => {
  axios
    .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json')
    .then((result) => {
      console.log(result);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default getMake;