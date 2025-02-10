import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>text</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    // margin: '10%',
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
