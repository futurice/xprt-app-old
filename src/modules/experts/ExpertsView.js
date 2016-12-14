import React, {PropTypes} from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';

const ExpertsView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows([
        'Expert John', 'Expert Joel', 'Expert James', 'Expert Jimmy', 'Expert Jackson', 'Expert Jillian', 'Expert Julie', 'Expert Devin'])
      };
  },

  render() {
    return (
      <View style={[styles.container]}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(expertsData) => <Text>{expertsData}</Text>}
      />
    </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});

export default ExpertsView;
