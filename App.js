import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState(1.3)
  const [sex, setSex] = useState('male')

  const maleCal = (870 + 10.2 * num1) * num2
  const femaleCal = (795 + 7.18 * num1) * num2
  const calories = sex === 'male' ? maleCal.toFixed(0) : femaleCal.toFixed(0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calorie consumption</Text>
      <Text style={styles.text}>Are you a male or female?</Text>
      {sex && <Text>{sex}</Text>}
      <Picker
        selectedValue={sex}
        onValueChange={(value) => setSex(value)}
        style={styles.textInput}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      
      <Text style={styles.text}>How much do you weigh (kg)?</Text>
      <TextInput
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
        style={styles.textInput}
      />
      <Text style={styles.text}>Select your activity intensity:</Text>
      {num2 && <Text>{num2}</Text>}
      <Picker
        selectedValue={num2}
        onValueChange={(itemValue) => setNum2(itemValue)}
        style={styles.textInput}
      >
        <Picker.Item label="Light (1.3)" value={1.3} />
        <Picker.Item label="Usual (1.5)" value={1.5} />
        <Picker.Item label="Moderate (1.7)" value={1.7} />
        <Picker.Item label="Hard (2.0)" value={2.0} />
        <Picker.Item label="Very Hard (2.2)" value={2.2} />
      </Picker>
      
      <Text style={styles.text}>Your calorie consumption is:</Text>
      {num1 ? <Text>{calories}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header: {
    marginBottom: 50,
    fontSize: 30,
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8, 
    width: 50,
    height: 30,
  },
 
  text:{
    fontSize: 20,
    marginBottom: 10,
  }
});
