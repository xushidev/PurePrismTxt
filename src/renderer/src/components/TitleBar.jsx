import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react";
import { CgMaximize } from "react-icons/cg";
import { GoX } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


// Rafce
function TitleBar() {
    const exit = () => window.electron.ipcRenderer.send('exit')
    const max = () => window.electron.ipcRenderer.send('maximise')
    

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
                <HStack>
                    {/*Insert exit, minimise and full screen button here*/}
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
