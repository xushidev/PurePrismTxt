import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TitleBar from "./components/TitleBar"

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <TitleBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </Box>
  )
}

export default App
