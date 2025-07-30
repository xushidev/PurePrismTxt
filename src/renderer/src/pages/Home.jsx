import { Box, Button, Text } from "@chakra-ui/react";
import TitleBar from "../components/TitleBar";
import { useEffect, useState } from "react";


function Home() {
    const [mainValue, setMainValue] = useState("")
    const ipcHandle = () => window.electron.ipcRenderer.send('ping')
    
    function test(){
        window.electron.ipcRenderer.invoke('get-value').then(setMainValue)
    }

    return (
        <Box>
            <Button
                onClick={ipcHandle}
                >
                Send Ping
            </Button>
            <Button
                onClick={test}
            >
                Send another test ping
            </Button>
            <Text>
                Display value: {mainValue}
            </Text>
        </Box>
    )
}

export default Home;