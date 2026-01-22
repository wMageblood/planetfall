import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import pathRoutes from "./constants/routes"


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          {pathRoutes.map(({ path, element: Element }) => (<Route path={path} element={<Element />} />))}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App