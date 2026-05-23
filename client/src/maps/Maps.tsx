import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function Maps() {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)

useEffect(() => {
  if (!mapContainer.current) return

  mapRef.current = new maplibregl.Map({
    container: mapContainer.current,
    style: 'https://tiles.openfreemap.org/styles/dark',
    center: [0, 0],
    zoom: 2,
  })

  return () => {
    mapRef.current?.remove()
  }
}, [])

  return (
    <div
      ref={mapContainer}
      className="w-full h-full"
    />
  )
}