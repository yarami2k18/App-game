import React, { useState }from 'react';
import {
  SafeAreaView,
  Platform,
} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import GameScreen from './screens/game-screen';
import GameOverScreen from './screens/game-over-screen';
import { assets } from '../react-native.config';
import { styles } from './styles';

const isIOS = Platform.OS === 'ios';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleStarGame = (selectedNumber) => {
    /*if (!selectedNumber ||
      !selectedNumber.toString().trim().length) {
        alert('Ingrese un numero')
        return
      }*/
    setUserNumber(selectedNumber);
  }

  const handleGameOver = (numRounds) => {
    setGuessRounds(numRounds);
  }

  const handleRestart = () => {
    setGuessRounds(0);
    setUserNumber(null)
  }
  let content = <StartGameScreen onStarGame={handleStarGame}/>

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userOptions={userNumber} onGameOver={handleGameOver}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handleRestart} />
  }
  return (
    <SafeAreaView style={styles.container}>
       {content}
    </SafeAreaView>
  );
};


export default App;
