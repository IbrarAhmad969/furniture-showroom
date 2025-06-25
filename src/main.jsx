import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import SearchContextProvider from './context/SearchContextProvider.jsx'

createRoot(document.getElementById('root')).render(

   
   <StrictMode>
     <SearchContextProvider>
      <ThemeContextProvider>
       <App />
     </ThemeContextProvider>
     </SearchContextProvider>
   </StrictMode>
 
)
