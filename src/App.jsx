import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import ProfCatalog from './pages/ProfCatalog'
import PageLvl2 from './pages/PageLvl2'
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ProfCatalog" element={<ProfCatalog />} />
        <Route path="ProfCatalog/:slug" element={<PageLvl2 />}/>
      </Route>
    </Routes>
  )
}
export default App
