import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const LecturesView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>You have no previous lectures. Start by pressing the "+" button or browsing experts. Once you create a lecture, it will appear here.</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 25
  }
});

export default LecturesView;
