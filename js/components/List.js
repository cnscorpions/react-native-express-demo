import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const List = props => {
  const {list, onPressItem} = props;

  const renderItems = list => {
    return (
      <>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onPressItem(index)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return <View>{renderItems(list)}</View>;
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
});

export default List;
