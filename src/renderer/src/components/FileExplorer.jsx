import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import TxtEditor from './TxtEditor';
import FileList from './FileList';

const FileExplorer = () => {
    const [selectedFilePath, setSelectedFilePath] = React.useState('');

    return (
        <Box
            h={"95%"}
        >
            <Flex
                h={"100%"}
            >
                <FileList 
                    onSelectFile={setSelectedFilePath} 
                />
                <TxtEditor 
                    filePath={selectedFilePath}
                />
            </Flex>
        </Box>
    );
}

export default FileExplorer;
