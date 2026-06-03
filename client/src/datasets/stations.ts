export const stations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 'station-1',
        temperature: 20,
      },
      geometry: {
        type: 'Point',
        coordinates: [-66.64, 45.96],
      },
    },

    {
      type: 'Feature',
      properties: {
        id: 'station-2',
        temperature: 24,
      },
      geometry: {
        type: 'Point',
        coordinates: [-67.10, 46.10],
      },
    },

    {
      type: 'Feature',
      properties: {
        id: 'station-3',
        temperature: 18,
      },
      geometry: {
        type: 'Point',
        coordinates: [-65.90, 45.50],
      },
    },
  ],
}