import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Card from '../../components/card';
import {styles} from './styles';
import Header from '../../components/header';

const GameScreen = ({userOptions, onGameOver}) => {
  const generateRandomBetween = useCallback ((min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else return rndNum;
  }, [userOptions])

  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions));
  const [rounds,setRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHight = useRef(100)

useEffect(() => {
  if(currentGuess === userOptions) onGameOver(rounds)
}, [currentGuess,userOptions,onGameOver])

const handleNextGuess = (direction) => {
  if(
    (direction === 'lower' && currentGuess < userOptions) ||
    (direction === 'greater' && currentGuess > userOptions)
  ) {
    Alert.alert( 'No mientas... ', 'Tu sabes que no es verdad',[{Text: 'sorry!', style:'cancel'}])
  }
  if(direction === 'lower') {
    currentHight.current = currentGuess
  } else {
    currentLow.current = currentGuess
  }
  const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess)
  setCurrentGuess(nextNumber)
  setRounds(current => current +1)

}

  return (
    <View style={styles.container}>
      <Header title="Empezó el juego" />
      <Card style={styles.cardContainer}>
        <Text style={styles.cardTitle}>La suposición del oponente</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <Text style={styles.buttonsContainer} />
        <View style={styles.containerContent}>
          <Button title="Menor" onPress={() => handleNextGuess('lower')} color="#D36135" />
        </View>
        <View style={styles.containerContent}>
          <Button title="Mayor" onPress={() => handleNextGuess('greater')} color="#D36135" />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
