import React from 'react'
import PlayAudio from './PlayAudio'
import SelectLanguage from './SelectLanguage'

// UI
import {
    Stack,
    Box,
    Text,
    Input,
    Spinner
} from '@chakra-ui/core'

/* 
Card Front used in Add/Edit Card screens
*/

const CardFront = ({ toLanguage, 
            handleFromLanguageSelect, 
            fromLanguage, 
            front, 
            handleFront, 
            loadingAudio, 
            frontAudio }) => {
    return(
        <Stack
                flexBasis="100%"
                flex="1"
                padding={4}
                spacing={3}
                minWidth="sm"
                maxW="md" 
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                minH={{sm:"initial", md:"18rem"}}>

                    <Box>
                        <Text textAlign="center" color="blackAlpha.500" >
                        ORIGIN LANGUAGE
                        </Text>
                    </Box>
                    
                    {!toLanguage ? <Text>Loading language</Text> : <SelectLanguage 
                    handleLanguageSelect={handleFromLanguageSelect}
                    selected={fromLanguage} keyTo="text"/>}

                    <Input
                        name="front" 
                        placeholder="Card Front" 
                        value={front}
                        onChange={handleFront}
                        maxLength="60"
                        autoComplete="off"
                        size="lg"
                        isRequired
                        />

                    {loadingAudio === '' ? 
                        null 
                        : loadingAudio === 'loading' && frontAudio === '' ?
                            <Box>
                                <Spinner />
                                <p>Generating Audio</p>
                            </Box>
                        :
                        <Box ml={3}>
                           <PlayAudio type="button" side='front-audio' source={frontAudio} />
                        </Box>
                            
                    }
                            
                </Stack>
    )
}

export default CardFront;