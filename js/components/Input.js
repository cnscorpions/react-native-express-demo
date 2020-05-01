import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  const [text, setText] = useState('');
  const {onSubmit} = props;

  const handleSubmit = () => {
    // don't submit if empty
    if (!text) return;

    onSubmit(text);
    // reset state
    setText('');
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Type a todo, then hit enter!"
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});

export default Input;
