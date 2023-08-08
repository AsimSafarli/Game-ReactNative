import React from 'react'
import {  View,TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../Components/PrimaryButton'
import styles from '../Styles/StartGame'
function StartGame() {
  return (
    <View style={styles.startgame}>
    <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize="none" />
    <View style={styles.startgamebutton}>
    <PrimaryButton >
    
    Reset</PrimaryButton>
    <PrimaryButton >Confirm</PrimaryButton>

    </View>
    
    </View>
  )
}


export default StartGame