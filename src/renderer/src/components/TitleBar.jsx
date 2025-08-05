import { Button, Container, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import { CgMaximize, CgMinimize } from "react-icons/cg";
import { FaWindowMinimize } from "react-icons/fa6";
import { GoX } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


// Rafce
function TitleBar({ setFiles }) {
    const exit = () => window.electron.ipcRenderer.send('exit');
    const max = () => window.electron.ipcRenderer.send('maximise');
    const min = () => window.electron.ipcRenderer.send('minimise');

    const open = () => {
        window.electron.ipcRenderer.invoke('select-dir').then((result) => {
            if (Array.isArray(result)) {
                setFiles(result);
            }
        });
    }

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container p="0" maxW="100vw" sx={{ WebkitAppRegion: "drag" }}>
            <Flex justify="space-between" alignItems="center">
                <HStack>
                    <Button onClick={onOpen} borderRadius="0" sx={{ WebkitAppRegion: "no-drag" }}>
                        <IoMdSettings />
                    </Button>
                </HStack>
                <HStack spacing={0}>
                    <Button borderRadius="0" onClick={min} sx={{ WebkitAppRegion: "no-drag" }}>
                        <FaWindowMinimize />
                    </Button>
                    <Button borderRadius="0" onClick={max} sx={{ WebkitAppRegion: "no-drag" }}>
                        <CgMaximize />
                    </Button>
                    <Button borderRadius="0" onClick={exit} sx={{ WebkitAppRegion: "no-drag" }}>
                        <GoX />
                    </Button>
                </HStack>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)">
                    <ModalContent>
                        <ModalHeader>Settings</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack>
                                <Button borderRadius="0" onClick={toggleColorMode}>
                                    Toggle dark/light mode
                                </Button>
                                <Button borderRadius="0" onClick={open}>
                                    Choose root directory
                                </Button>
                            </VStack>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Container>
    );
}


export default TitleBar;
