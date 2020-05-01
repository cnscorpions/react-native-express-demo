import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './js/store/index';

import AnimatedComponent from './js/components/Animated';
import AnimatedText from './js/components/Animatable';
import TodoList from './js/todoList';
import Storage from './js/asyncStore';
import Posts from './js/fetch';

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AnimatedComponent />
        <AnimatedText />
        <TodoList />
        <Storage />
        <Posts />
      </PersistGate>
    </Provider>
  );
};

export default App;
