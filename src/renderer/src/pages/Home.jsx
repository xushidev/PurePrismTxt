import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TxtEditor from "../components/TxtEditor";


function Home() {
    const [mainValue, setMainValue] = useState("");

    const [dir, setDir] = useState("");

    const ipcHandle = () => window.electron.ipcRenderer.send('ping')
    
    function test(){
        window.electron.ipcRenderer.invoke('get-value').then(setMainValue)
    }

    function open(){
        window.electron.ipcRenderer.invoke('select-dir').then(setDir)
    }

    return (
        <Box
            padding={"10px"}
        >
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
            <Button
                onClick={open}
            >
                Open directory
            </Button>
            <Text>
                Display value: {mainValue}
            </Text>
            <Text>
                Display choosen directory: {dir}
            </Text>
            <TxtEditor/>
        </Box>
    )
}

export default Home;