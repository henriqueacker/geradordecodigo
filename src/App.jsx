
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rotas from './routes/Rotas'
import Sidebar from './components/Sidebar'
function App() {


  return (
    <BrowserRouter>
      <Sidebar/>
      <Rotas/>
    
    </BrowserRouter>
    
  )
}

export default App
