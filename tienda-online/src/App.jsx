import { Route, Routes } from "react-router"
import Error404 from "./pages/Error404.jsx"
import Header from "./components/Header.jsx"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
    </>
  )
}

export default App
