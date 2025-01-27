import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, address, school, course, email, onChangeText] = React.useState('');
  const [number, contact, onChangeNumber] = React.useState('');
 

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={name}
          placeholder="Name:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Age:"
          keyboardType="numeric"
        />

         <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={address}
          placeholder="Address:"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={school}
          placeholder="School:"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={course}
          placeholder="Course:"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={email}
          placeholder="Email:"
        />

         <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={contact}
          placeholder="Contact:"
          keyboardType="numeric"
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;