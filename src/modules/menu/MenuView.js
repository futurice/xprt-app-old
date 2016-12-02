import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const MenuView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  render() {
    return (
      <View style={[styles.container]}>
        <Text>
          Menu
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MenuView;
