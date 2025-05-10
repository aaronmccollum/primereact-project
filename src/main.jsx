import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importing the prime react wrapper for the project
import { PrimeReactProvider } from 'primereact/api';


createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
)
