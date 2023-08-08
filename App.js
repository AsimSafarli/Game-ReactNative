import {  View ,ImageBackground} from 'react-native';
import StartGame from './Screen/StartGame';
import styles from './Styles/Main';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#fff','#dc2626']} style={styles.main}>
    <ImageBackground imageStyle={styles.image} style={styles.main} source={require('./assets/background.jpeg')}>
    <View >
     <StartGame/>
    </View>
    </ImageBackground>
    </LinearGradient>
  );
}


