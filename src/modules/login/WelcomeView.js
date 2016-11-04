import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import {
  Button,
  ButtonGroup
} from 'react-native-elements'

import LoginForm from '../../components/LoginForm'

const WelcomeView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      selectedIndex: 0
    };
  },

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  },

  doLogin(credentials) {
    console.log(credentials);
  },

  render() {
    const buttons = ['Teacher', 'Expert'];
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.linkButton}>
          {'Welcome to SCOOL!'}
        </Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons} />

        <LoginForm
          submit={this.doLogin}
          />
      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default WelcomeView;
