import { BrowserRouter, Route, Routes } from "react-router-dom"
import pathRoutes from "./constants/routes"
import NewNavigationBar from "./components/NewNavigationBar/NewNavigationBar"


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NewNavigationBar />
        <Routes>
          {pathRoutes.map(({ path, element: Element }) => (<Route path={path} element={<Element />} />))}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App