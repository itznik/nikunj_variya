import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nikunj Variya | Architecture',
    short_name: 'Nikunj',
    description: 'Full-Stack Systems Architecture Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a2540',
    theme_color: '#0a2540',
    icons: [
      {
        src: '/icon-192x192.png', // Add a 192x192 square logo in public folder
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png', // Add a 512x512 square logo in public folder
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

