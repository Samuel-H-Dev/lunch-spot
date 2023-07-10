import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>
        Lunch Spot
      </Text>
      <RestList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#2262fe',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Header:{
    color: 'white',
    fontSize: 36,
  }
});
