import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import App from './App.jsx'
import ParticipantList from './components/festAttendance.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParticipantList />
  </StrictMode>,
)


// my-app\client\src\main.jsx