import { Box, Button, Center, Container, Flex, VStack } from '@chakra-ui/react'
import React from 'react'

const FileList = ({ onSelectFile , filesPath }) => {
    const files = Array.isArray(filesPath) ? filesPath : [];

    const getFileName = (filePath) => filePath.split(/[/\\]/).pop()

    return (
        <Flex direction="column">
            <Box
                m={"2"}
                maxH={"95%"}
                overflowY="auto"
                sx={{
                    '::-webkit-scrollbar': {
                        width: '15px',
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: 'rgba(255, 255, 255, 0.2)',
                    },
                    '::-webkit-scrollbar-thumb:hover': {
                        background: 'rgba(255, 255, 255, 0.4)',
                        cursor: 'default',
                    },
                    '::selection': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                    },
                    '::-moz-selection': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                    },
                    '::-webkit-selection': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                    },
                }}
            >
                <VStack 
                    align="start"
                    spacing={-1}
                >
                    {files.map((file) => (
                        <Button
                            borderRadius={0}
                            paddingX={"20"}
                            size="sm"
                            key={file} 
                            onClick={() => onSelectFile(file)}
                            justifyContent="start"
                            flexGrow={0}
                            whiteSpace="nowrap"
                            overflow="hidden"
                            w={"100%"}
                            textOverflow="ellipsis"
                        >
                            <Center>
                                {getFileName(file)}
                            </Center>
                        </Button>
                    ))}
                </VStack>
            </Box>
        </Flex>
    )
}

export default FileList;