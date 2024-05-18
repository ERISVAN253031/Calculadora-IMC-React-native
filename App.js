import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title'
import Main from './src/components/Form'

export default function App() {
  return (
    <View style={styles.container}>
    
     <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    paddingTop:80,
   
  },
});
