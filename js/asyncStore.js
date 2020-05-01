import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Title from './components/Title';
import Input from './components/Input';

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE';

const Storage = () => {
  const [name, setName] = useState('World');
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name !== null) {
        setName(name);
      } else {
        throw new Error('Fail to load name');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const save = async name => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      setName(name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Title children="Async Store demo" />
      <Input onSubmit={text => save(text)} />
      <Text>Hello {name}!</Text>
    </View>
  );
};

export default Storage;
