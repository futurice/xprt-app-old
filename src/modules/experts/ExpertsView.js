import React, {PropTypes} from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';

import { SearchBar, List, ListItem } from 'react-native-elements';

const ExpertsView = React.createClass({
  componentDidMount() {
    this.props.getExperts();
  },

  getInitialState() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.experts.data)
    });
  },

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subjects.join(', ')}
        avatar={{uri:rowData.photograph}}
      />
    )
  },

  changeFilter(e) {
    console.log(e);
  },

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.changeFilter}
          placeholder='Search for people, tags, location, etc...' />
        <List>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </List>
      </View>
    );
  }
});

export default ExpertsView;
