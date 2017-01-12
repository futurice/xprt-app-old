import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default React.createClass({
  displayName: 'TabBarButton',
  propTypes: {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  },
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, this.props.isSelected && styles.selected]}
        >
        <Text style={this.props.isSelected && styles.textSelected}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: '#4A4A4A'
  },
  textSelected: {
    color: 'white'
  }
});
