import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react";
import { CgMaximize, CgMinimize } from "react-icons/cg";
import { FaWindowMinimize } from "react-icons/fa6";
import { GoX } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


// Rafce
function TitleBar() {
    const exit = () => window.electron.ipcRenderer.send('exit');
    const max = () => window.electron.ipcRenderer.send('maximise');
    const min = () => window.electron.ipcRenderer.send('minimise');

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container
            p={"0"}
            maxW="100vw"
            sx={{
                WebkitAppRegion: "drag"
            }}
        >
            <Flex
                justify="space-between"
                alignItems="center"
            >
                <HStack>
                    <Button
                        borderRadius={"0"}
                        onClick={toggleColorMode}
                        sx={{ WebkitAppRegion: "no-drag" }}
                        >
                        {colorMode === "light" ? <IoMoon /> : <LuSun/>}
                    </Button>
                </HStack>
                {/*Insert title here*/}
                <HStack
                    spacing={0}
                >
                    <Button
                        borderRadius={"0"}
                        onClick={min}
                        sx={{ WebkitAppRegion: "no-drag" }}
                        >
                        <FaWindowMinimize/>
                    </Button>
                    <Button
                        borderRadius={"0"}
                        onClick={max}
                        sx={{ WebkitAppRegion: "no-drag" }}
                        >
                        <CgMaximize />
                    </Button>
                    <Button 
                        borderRadius={"0"}
                        onClick={exit}
                        sx={{ WebkitAppRegion: "no-drag" }}
                        >
                        <GoX />
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
}

export default TitleBar;
