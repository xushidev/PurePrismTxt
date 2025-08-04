import { Box, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const TxtEditor = () => {
    let [value, setValue] = React.useState('')

    function sendChanges(input) {
        window.electron.ipcRenderer.invoke('changes', input);
    }

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        sendChanges(inputValue)
        setValue(inputValue)
    }

    const handleKeyDown = (e) => {
        // Variables
        const textarea = e.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const pairs = {
            '{': '}',
            '[': ']',
            '(': ')',
            '"': '"',
            "'": "'",
            '`': '`'
        };

        // Insert 4 spaces on Tab
        if (e.key === 'Tab') {
            e.preventDefault();
            const newValue = value.substring(0, start) + '\t' + value.substring(end);
            setValue(newValue);
            sendChanges(newValue);
            requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = start + '\t'.length;
            }, 0);
        }

        // Auto-close brackets and quotes
        else if (Object.keys(pairs).includes(e.key)) {
            e.preventDefault();
            const open = e.key;
            const close = pairs[open];
            const selectedText = value.substring(start, end);
            const newValue = value.substring(0, start) + open + selectedText + close + value.substring(end);

            // Setting new values
            setValue(newValue);
            sendChanges(newValue);

            requestAnimationFrame(() => {
            textarea.selectionStart = textarea.selectionEnd = start + 1;
            }, 0);
        }

        // Auto-indent between brackets on Enter
        else if (e.key === 'Enter') {
            const before = value.substring(0, start);
            const after = value.substring(end);
            const prevChar = value[start - 1];
            const nextChar = value[end];

            if (
            (prevChar === '{' && nextChar === '}') ||
            (prevChar === '[' && nextChar === ']') ||
            (prevChar === '(' && nextChar === ')')
            ) {
            e.preventDefault();

            // Detect current indent level
            const lineStart = before.lastIndexOf('\n') + 1;
            const currentLine = before.substring(lineStart);
            const indentMatch = currentLine.match(/^\s*/);
            const indent = indentMatch ? indentMatch[0] : '';

            const newValue =
                before +
                '\n' + indent + '\t' + // one extra indent
                '\n' + indent +
                after;

            setValue(newValue);
            sendChanges(newValue);

            // Move cursor to middle line, after new indent
            setTimeout(() => {
                const newCursorPos = start + 1 + indent.length + '\t'.length;
                textarea.selectionStart = textarea.selectionEnd = newCursorPos;
            }, 0);
            }
        }
    };


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
                height={"70vh"}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
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
