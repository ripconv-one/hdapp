import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { stations } from '../datasets/stations'

export default function Maps() {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)

useEffect(() => {
  if (!mapContainer.current) return

  const map = new maplibregl.Map({
    container: mapContainer.current,
    style: 'https://tiles.openfreemap.org/styles/dark',
    center: [-66.64, 45.96],
    zoom: 6,
  })

  mapRef.current = map

  map.on('load', () => {

    map.addSource('stations', {
      type: 'geojson',
      data: stations,
    })

    map.addLayer({
      id: 'stations-layer',
      type: 'circle',
      source: 'stations',
      paint: {
        'circle-radius': 6,
        'circle-color': '#00ffff',
      },
    })

    // CLICK ON MAP
    map.on('click', (e) => {
      console.log('Map clicked:', e.lngLat)
    })

    // CLICK ON STATION
    map.on('click', 'stations-layer', (e) => {
      const feature = e.features[0]

      console.log('Station clicked:', feature.properties)
    })

    // Optional: cursor pointer on hover
    map.on('mouseenter', 'stations-layer', () => {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', 'stations-layer', () => {
      map.getCanvas().style.cursor = ''
    })
  })

  return () => {
    map.remove()
  }
}, [])
  return (
    <div
      ref={mapContainer}
      className="w-full h-full"
    />
  )
}