import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoiY2FybGVzbWFycm9uIiwiYSI6ImNscjlvb29mdTAyeGYyc3Mwc3RjZnh1ZjcifQ.4APlGO0dV3jjlOXkeHc32A'
    }
});

export default searchApi;