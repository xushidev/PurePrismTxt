import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react";
import { GoX } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


// Rafce
function TitleBar() {
    const exit = () => window.electron.ipcRenderer.send('exit')
    
    

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container
            p={"0"}
            maxW="100vw"
        >
            <Flex
                justify="space-between"
                alignItems="center"
                bg="black"
            >
                <HStack>
                    <Button
                        borderRadius={"0"}
                        onClick={toggleColorMode}
                        >
                        {colorMode === "light" ? <IoMoon /> : <LuSun fontSize={20} />}
                    </Button>
                </HStack>
                {/*Insert title here*/}
                <HStack>
                    {/*Insert exit, minimise and full screen button here*/}
                    <Button 
                        borderRadius={"0"}
                        onClick={exit}
                        >
                        <GoX />
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
}

export default TitleBar;
