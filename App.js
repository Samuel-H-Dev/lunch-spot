import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';

export default function App() {

  const [selectRestaurant, setSelectRestaurant] = useState()

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.Header}>
        Boca Raton Lunch Spot
      </Text>
      <RestList selectRestaurant={selectRestaurant}/>
      <StatusBar style="auto" />
    </View>
    <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F9EBE0",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Header:{
    color: '#131313',
    fontSize: 30,
    fontWeight: 500,
    
  }
});
