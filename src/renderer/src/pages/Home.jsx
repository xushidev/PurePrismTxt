import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TxtEditor from "../components/TxtEditor";
import FileExplorer from "../components/FileExplorer";
import TitleBar from "../components/TitleBar";


function Home() {
    return (
        <Box
            display="flex" flexDirection="column" height="100vh"
            
        >
            <Box
                flex="1" overflow="auto"
            >
                <TitleBar/>
                <FileExplorer />
            </Box>
        </Box>
    )
}

export default Home;