import React from 'react';
import {Image, View, Text, Button} from 'react-native';
import Card from '../../components/card';
import {styles} from './styles';

const GameOverScreen = ({rounds, choice, onRestart}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/Game-over.png')}
        />
        <Text style={styles.text}>Intentos:{rounds}</Text>
        <Text style={[styles.text, styles.bold]}>¡{choice}!</Text>
      </Card>
    </View>
  );
};

export default GameOverScreen;
