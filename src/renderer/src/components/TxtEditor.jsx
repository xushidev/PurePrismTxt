import { Box, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const TxtEditor = () => {
    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <Box>{ /*
            <Text 
                mb='8px'
                whiteSpace="pre"
            >Value: {value}</Text> */}
            <Textarea
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
                }}
                height={"70vh"}
                value={value}
                onChange={handleInputChange}
                placeholder='Here is a sample placeholder'
                size='md'
                resize={"none"}
                variant={"unstyled"}
                wrap="soft"
            />
        </Box>
    )
}

export default TxtEditor
