import React from 'react';
import {
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const isIOS = Platform.OS === 'ios';

import Header from '../../components/header';
import Card from '../../components/card';
import {styles} from './styles';
import Input from '../../components/input';
import {useState} from 'react';
import {colors} from '../../constants/theme';

const StartGameScreen = ({onStarGame}) => {
  const [inputValue, setInputValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleOnChange = Text => {
    setInputValue(Text.replace(/[^0-9]/g, ''));
  };
  const handleResetInput = () => {
    setInputValue('');
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  const confirmedOutput = confirmed ? (
    <Card style={styles.containerConfirmed}>
      <Text style={styles.cardTitle}>Tu Selección</Text>
      <Text style={styles.confirmedText}>{selectedNumber}</Text>
      <View style={styles.containerButton}>
        <Button
          title="Empezar Juego"
          onPress={() => onStarGame(selectedNumber)}
          color="#D36135"
        />
      </View>
    </Card>
  ) : null;

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={isIOS ? '' : 'height'}
          style={styles.container}>
          <View style={styles.container}>
            <Header title="Adivina el número" />
            <Card>
              <Text style={styles.cardTitle}>Empezar Juego</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Elija un número</Text>
                <Input
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  placeholder=" Ej: 11"
                  placeholderTextColor="#D36135"
                  maxLength={2}
                  handleOnChange={value => handleOnChange(value)}
                  returnKeyType="done"
                  value={inputValue}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => handleResetInput()}>
                  <Text style={styles.buttonText}>Limpiar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => handleConfirmInput()}>
                  <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default StartGameScreen;
