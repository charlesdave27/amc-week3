import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MultilineTextInputExample = () => {
  const [name, address, school, course, email, value, onChangeText] = React.useState('');
  const [number, contact, onChangeNumber] = React.useState('');
 
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: value,
          },
        ]}>

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

         <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="About Me:"
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MultilineTextInputExample;
