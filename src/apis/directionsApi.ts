import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/cycling',
    params: {
        alternatives: false,
        continue_straight: true,
        geometries: 'geojson',
        overview: 'full',
        steps: false,
        access_token: 'pk.eyJ1IjoiY2FybGVzbWFycm9uIiwiYSI6ImNscjlvb29mdTAyeGYyc3Mwc3RjZnh1ZjcifQ.4APlGO0dV3jjlOXkeHc32A'
    }
});

export default directionsApi;