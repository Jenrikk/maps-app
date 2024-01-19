import { MutationTree } from 'vuex';
import { MapStateInterface } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapStateInterface> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map;
    },

    setPlacesMarkers(state, places: Feature[]){
        
        // Delete markers from the map and from the store:
        state.markers.forEach( marker => marker.remove())
        state.markers = [];
        
        if(!state.map) return;

        // Create new markers:
        for(const place of places){

            const [lng, lat] = place.center;

            const popUp = new Mapboxgl.Popup()
                .setLngLat([lng, lat])
                .setHTML(`
                    <h4>${place.text}</h4>
                `)

            const customMarker = new Mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popUp)
                .addTo(state.map);
            
            state.markers.push(customMarker);
        }
    },

    setRoutePolyline(state, coords: number[][]){
        const start = coords[0];
        const end = coords[coords.length - 1];

        // Define bounds:
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        );
        
        // Add each point to the bounds
        for(const coord of coords){
            const newCoord: [number, number] = [coord[0], coord[1]];
            bounds.extend(newCoord);
        }
        
        // Set the instruction so the map can show all the points:
        state.map?.fitBounds( bounds, {padding: 300} );

        // draw the Polyline:
        const sourceData: Mapboxgl.AnySourceData= {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        };
        
        if(state.map?.getLayer('RouteString')){
            state.map.removeLayer('RouteString');
            state.map.removeSource('RoutePolyline');
        }

        state.map?.addSource('RoutePolyline', sourceData)

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RoutePolyline',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        })

    },

    setDistanceDuration(state, {distance, duration}: {distance: number, duration: number}){
        let kms = distance / 1000;
        kms = Math.round(kms * 100);
        kms /= 100;

        state.distance = kms;
        state.duration = duration; // is in minutes by default
    }
}


export default mutation;