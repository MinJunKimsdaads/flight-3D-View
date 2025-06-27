import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MapProvider } from './contexts/MapContext.tsx'
import '@/assets/css/common.scss'

createRoot(document.getElementById('root')!).render(
  <MapProvider>
    <App />
  </MapProvider>
)
