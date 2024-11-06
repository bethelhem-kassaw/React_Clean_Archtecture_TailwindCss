import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="app-container">

        <main>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </main>

      </div>
    </>
  )
}

export default App
