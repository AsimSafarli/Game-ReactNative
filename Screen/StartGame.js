import React, { useState } from 'react'
import {  View,TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../Components/PrimaryButton'
import styles from '../Styles/StartGame'
function StartGame() {
  const [number,setNumber] = useState('')

  function numberInput(e){
    setNumber(e)
  }
  function resetInput() {
    setNumber(''); 
  }
  
  function confirmInput() {
    const enteredNumber = parseInt(number);
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 0 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInput }]
      );
    }
  }
  return (
    <View style={styles.startgame}>
    <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize="none" onChangeText={numberInput}  value={number}/>
    <View style={styles.startgamebutton}>
    <PrimaryButton onPress={resetInput}>
    
    Reset</PrimaryButton>
    <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>

    </View>
    
    </View>
  )
}


export default StartGame