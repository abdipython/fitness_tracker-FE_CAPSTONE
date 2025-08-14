import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutsProvider } from './store/workouts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsProvider>
      <App />
    </WorkoutsProvider>
  </React.StrictMode>
);
