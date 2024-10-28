import { SearchProvider } from '@/context/searchContext.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchPage from '@/pages/Search.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<App />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </SearchProvider>
  </StrictMode>,
)
