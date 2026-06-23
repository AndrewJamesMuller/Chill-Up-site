import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import ProfCatalog from './pages/ProfCatalog'
import PageLvl2 from './pages/PageLvl2'
import PageLvl3 from "./pages/PageLvl3"
import AboutUs from "./pages/AboutUs"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ProfCatalog" element={<ProfCatalog />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="ProfCatalog/:slug" element={<PageLvl2 />}/>
        <Route path="ProfCatalog/:category/:profession" element={<PageLvl3/>} />
      </Route>
    </Routes>
  )
}
export default App
