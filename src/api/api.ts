// @ts-nocheck

import {create} from 'apisauce';

const api = create({
  baseURL: 'https://api.apify.com/v2/key-value-stores/',
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export const fetchData = () => {
  api
    .get('/moxA3Q0aZh5LosewB/records/LATEST')
    .then(response => console.log(response));
};

// api.post('/users', {name: 'steve'}, {headers: {'x-gigawatts': '1.21'}});
