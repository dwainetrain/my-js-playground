import React, { useState, useEffect } from 'react';
import SelectLanguage from './SelectLanguage'
import { firestore, auth, functions } from '../firebase';
import { speechLanguageMap } from './speechLanguagesMap';
import PlayAudio from './PlayAudio'
import { useStateWithCallbackInstant } from 'use-state-with-callback';
import Helmet from 'react-helmet'
import { collectIdsAndDocs } from '../utilities';
import { Link } from 'react-router-dom'


// Styling
import {
    Box,
    Text,
    Input,
    Button,
    Flex,
    Checkbox,
    Stack,
    Heading
  } from '@chakra-ui/core'


const AddCard = ({ handleMessage, userLangPrefs, match, user, history }) => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [frontAudio, setFrontAudio] = useState('');
    const [backAudio, setBackAudio] = useState('');
    const [manualEntry, setManualEntry] = useState(false)
    const [generateChecked, setGenerateChecked] = useState(true)
    const [originLanguageName, setOriginLanguageName] = useState('')
    const [targetLanguageName, setTargetLanguageName] = useState('')

    // State Messages
    const [loadingTranslation, setLoadingTranslation] = useState(false)
    
    // This will eventually be a default set in user profile
    const [fromLanguage, setFromLanguage] = useState('');
    const [toLanguage, setToLanguage] = useState('');

    // Specific code for Google text-to-speech
    const [speechLanguage, setSpeechLanguage] = useState('')
    const [frontSpeechLanguage, setFrontSpeechLanguage] = useState('')

    // Audio States
    const [loadingAudio, setLoadingAudio] = useState('')

    // Bring in the id from router so we can preset the fields
    const cardId = match.params.id;

    // Set default preferences
    // Prime candidate for refactoring!
    // useEffect(() => {

    //     setToLanguage(!userLangPrefs.targetCode ? '' : userLangPrefs.targetCode)
    //     setFromLanguage(!userLangPrefs.originCode ? '' : userLangPrefs.originCode)
    //     setSpeechLanguage(!userLangPrefs.targetCode? '' : speechLanguageMap[userLangPrefs.targetCode].ttsCode)
    //     setFrontSpeechLanguage(!userLangPrefs.targetCode? '' : speechLanguageMap[userLangPrefs.originCode].ttsCode)
    //     setOriginLanguageName(!userLangPrefs.targetCode? '' : speechLanguageMap[userLangPrefs.originCode].language)
    //     setTargetLanguageName(!userLangPrefs.targetCode? '' : speechLanguageMap[userLangPrefs.targetCode].language)
    // }, [userLangPrefs])

    useEffect(() => {
      const fetchData = async () => {
        const response = await firestore.doc(`users/${user.uid}/cards/${cardId}`).get();
        const cardDetail = collectIdsAndDocs(response);
        setFront(cardDetail.front);
        setBack(cardDetail.back);
        setFromLanguage(cardDetail.origin)
        setToLanguage(cardDetail.target)
        setOriginLanguageName(cardDetail.originLanguageName)
        setTargetLanguageName(cardDetail.targetLanguageName)
        setFrontSpeechLanguage(cardDetail.frontSpeechLanguage)
        setSpeechLanguage(cardDetail.backSpeechLanguage)
        setFrontAudio(cardDetail.frontAudioURL)
        setBackAudio(cardDetail.backAudioURL)
        console.log(cardDetail)
        console.log(backAudio)
        console.log(cardDetail.backAudioURL)
      }
      fetchData()
    }, [cardId, user.uid])

    const create = async (e) => {
        e.preventDefault();
        if (front === '') {
            handleMessage('frontRequired')
        } else if (back === ''){
            handleMessage('backRequired')
        } else {
            try {
                const card = {
                    front:front, 
                    back:back,
                    backAudioURL: backAudio,
                    frontAudioURL: frontAudio,
                    userID:auth.currentUser.uid,
                    origin: fromLanguage,
                    target: toLanguage,
                    backSpeechLanguage: speechLanguage,
                    frontSpeechLanguage: frontSpeechLanguage,
                    originLanguageName: originLanguageName,
                    targetLanguageName: targetLanguageName,
                    reverse: false,
                    enabled: true,
                    dateCreated: new Date(),
                    lastReview: new Date(),
                    nextReview: ''
                }
                await firestore.collection(`users/${auth.currentUser.uid}/cards`).add(card);
                setFront('');
                setBack('');
                setFrontAudio('');
                setBackAudio('');
                setLoadingAudio('')
                handleMessage('saved');
            } catch(error) {
                console.error('Error Adding Card: ', error.message)
            }
            
        }
    }

    // Update
    const update = async (e) => {
      e.preventDefault();
      const card = {
          front:front, 
          back:back,
          backAudioURL: backAudio,
          frontAudioURL: frontAudio,
          userID:auth.currentUser.uid,
          origin: fromLanguage,
          target: toLanguage,
          backSpeechLanguage: speechLanguage,
          frontSpeechLanguage: frontSpeechLanguage,
          originLanguageName: originLanguageName,
          targetLanguageName: targetLanguageName,
          reverse: false,
          enabled: true,
      };
      const cardRef = firestore.doc(`users/${user.uid}/cards/${cardId}`);
      await cardRef.update(card);
      handleMessage('updated');
      // Redirects back to card collectioin using React Router history
      history.push('/card-collection')
    }

    const handleFromLanguageSelect = async (e) => {
        const languageCode = await e.target.value
        setFromLanguage(languageCode)
        setOriginLanguageName(speechLanguageMap[languageCode].language)
        setFrontSpeechLanguage(speechLanguageMap[languageCode].ttsCode)
    }

    const handleToLanguageSelect = async (e) => {
        const languageCode = await e.target.value
        setToLanguage(languageCode)
        setTargetLanguageName(speechLanguageMap[languageCode].language)
        setSpeechLanguage(speechLanguageMap[languageCode].ttsCode)
    }

    const translationCall = functions.httpsCallable('translate');
    
    const translation = async (e) => {
        if (front === '') {
            handleMessage('frontRequired')
        } else if (front.length > 60) {
            handleMessage('characterLimit')
        } else {
        e.preventDefault();
            try{
                 translationCall({text:front,target:toLanguage}).then((result) => {
                    setFrontAudio('')
                    setBackAudio('')
                    setBack(result.data.translation)
                    setLoadingTranslation(false)
                    if(generateChecked){
                        setGenerateAudio(true)
                        setLoadingAudio('loading')
                    }
                    
                })
            }
            catch(error) {
                    console.log(error)
            }
        }
    }

    const text2SpeechCall = functions.httpsCallable('gt2s');

    const textToSpeech = (side, text, speechLanguage) => {
            try{
                text2SpeechCall({text:text,target:speechLanguage}).then((result) => {
                    if(side === 'back') { 
                        setBackAudio(result.data) } else if (side === 'front') { 
                        setFrontAudio(result.data)
                    }
                })
            }
            catch(error) {
                    console.log(error)
            }
    }

    // Ain't pretty, but it works
    const handleSwap = () => {
        const swapSpace = {
            oldFront:front,
            oldBack:back,
            oldFromLanguage:fromLanguage,
            oldToLanguage: toLanguage,
            oldSpeechLanguage: speechLanguage,
            oldFrontSpeechLanguage: frontSpeechLanguage,
            oldOriginLanguageName: originLanguageName,
            oldTargetLanguageName: targetLanguageName,
            oldFrontAudio: frontAudio,
            oldBackAudio: backAudio
        }

        setFront(swapSpace.oldBack);
        setBack(swapSpace.oldFront);
        setFromLanguage(swapSpace.oldToLanguage);
        setToLanguage(swapSpace.oldFromLanguage);
        setSpeechLanguage(swapSpace.oldFrontSpeechLanguage);
        setFrontSpeechLanguage(swapSpace.oldSpeechLanguage);
        setOriginLanguageName(swapSpace.oldTargetLanguageName);
        setTargetLanguageName(swapSpace.oldOriginLanguageName);
        setFrontAudio(swapSpace.oldBackAudio)
        setBackAudio(swapSpace.oldFrontAudio)
    }

     // Testing out callback in use state
     const [generateAudio, setGenerateAudio] = useStateWithCallbackInstant(false, () => {
     if(generateAudio === true && generateChecked) {
            textToSpeech('front', front, frontSpeechLanguage)
            textToSpeech('back', back, speechLanguage)
            setGenerateAudio(false)
        }
     })

    const handleManualGenerateAudio = () => {
        if (front === '') {
            handleMessage('frontRequired')
        } else if (back === '') {
            handleMessage('backRequired')
        } else {
            setFrontAudio('')
            setBackAudio('')
            setLoadingAudio('loading')
            setGenerateAudio(true)}
    }

    return (
        <Stack pl="10rem" pt="2rem" maxWidth="800px">
            <Helmet>
                <title>Minderva | Card Edit</title>
            </Helmet>
            <Heading as="h3" pb="2rem">Edit Card</Heading>
            
            <Flex direction="row" flexWrap="wrap" justifyContent="space-between" >
                <Stack
                flexBasis="100%"
                flex="1"
                padding={4}
                spacing={3}
                minWidth="lg"
                maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">

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
                        placeholder="Front" 
                        value={front}
                        onChange={e => {
                            setFront(e.target.value)
                            }}
                        maxLength="60"
                        autoComplete="off"
                        size="lg"
                        />
                    <PlayAudio side='front-audio' source={frontAudio} />
                    {loadingAudio === '' ? 
                        null 
                        : loadingAudio === 'loading' && frontAudio === '' ?
                            <p>Loading Audio</p>
                        :
                        <PlayAudio side='front-audio' source={frontAudio} />
                    }
                            
                </Stack>

                <Stack
                flexBasis="100%"
                flex="1"
                padding={4}
                maxW="sm" 
                borderWidth="1px"
                rounded="lg"
                minWidth="lg"
                >
                    
                    <Box width="100%">
                        <Text textAlign="center" color="blackAlpha.500">
                        TARGET LANGUAGE
                        </Text>
                    </Box>
                     {!toLanguage ? <Text>Loading language</Text> :
                    <SelectLanguage 
                    handleLanguageSelect={handleToLanguageSelect}
                    selected={toLanguage} keyTo="target"/>}
                    
                    {manualEntry === true ? 
                        <div>
                            <Input
                            name="back" 
                            placeholder="Back" 
                            value={back}
                            onChange={e => setBack(e.target.value)}
                            maxLength="60"
                            autoComplete="off"
                            size="lg"/>
                            
                            <Button variantColor="cyan" leftIcon="chevron-right" 
                            onClick={handleManualGenerateAudio}
                            >
                            Generate Audio
                            </Button>
                            <Button as="a"
                            onClick={() => setManualEntry(false)} >
                            Cancel
                            </Button>
                        </div>
                        : loadingTranslation === true && front !== ''? 
                        <p>Loading translation</p> : 
                        <Heading as="h3">{back}</Heading>}

                    <PlayAudio side='back-audio' source={backAudio} />
                    {loadingAudio === '' ? 
                        null 
                        : loadingAudio === 'loading' && backAudio === ''?
                            <p>Loading Audio</p>
                        :
                        <PlayAudio side='back-audio' source={backAudio} />
                        
                    }

                    {manualEntry === true ? null :
                    
                    <Stack>
                        <Button variantColor="twitter" leftIcon="arrow-right" onClick={(e) => {
                        setManualEntry(false)
                        setLoadingAudio('')
                        translation(e)
                        setLoadingTranslation(true)}}>
                        Translate
                        </Button>
                        <Checkbox mr={3} variantColor="teal" defaultIsChecked onChange={e =>  setGenerateChecked(e.target.checked)}>
                        Generate Audio
                    </Checkbox>
                        <Button size="sm" variant="link" leftIcon="edit" onClick={() => setManualEntry(true)}>
                        Manual Entry
                        </Button>
                    </Stack>
                    
                    }

                    
                    
                </Stack>
            </Flex>

            <Flex justifyContent="center">
                <Flex width="100%" justifyContent="space-around">
                <Button variantColor="blackAlpha" leftIcon="repeat" onClick={handleSwap}>
                            Swap Sides
                            </Button>
                </Flex>
                <Flex width="100%" justifyContent="flex-end">
                <Link to="/card-collection">Cancel</Link>
                    <Button variantColor="whatsapp" onClick={update}>
                    Update Card
                    </Button>
                </Flex>
            </Flex>
        </Stack>
        
    )}

export default AddCard;