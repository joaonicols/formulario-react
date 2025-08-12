import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormularioCadastro from './components/Cadastro_Cliente.jsx'
import Tarefas from './components/Tarefas.jsx'
import Calculadora from './components/Calculadora.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
