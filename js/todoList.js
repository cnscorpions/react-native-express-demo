import React from 'react';
import {View} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';

import {connect} from 'react-redux';
import {actionCreators} from './actionCreators/todo';

const TodoList = props => {
  const {todos, addItem, removeItem} = props;

  return (
    <View>
      <Title children={'ToDo List'} />
      <Input onSubmit={addItem} />
      <List list={todos} onPressItem={removeItem} />
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actionCreators.add(item)),
  removeItem: index => dispatch(actionCreators.remove(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
