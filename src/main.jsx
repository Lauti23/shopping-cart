import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FiltersProvider>
      <App />
    </FiltersProvider>
)
