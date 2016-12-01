import * as NavigationState from '../navigation/NavigationState';
import * as AuthState from '../auth/AuthState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  ButtonGroup
} from 'react-native-elements';

import LoginForm from '../../components/LoginForm';

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
    this.setState({selectedIndex});
  },

  doLogin(credentials) {
    // Always succeed with login for now
    this.props.dispatch(AuthState.onUserLoginSuccess());
    console.log(credentials);
  },

  recoverPassword() {
    console.log('Recover Password Pressed!');
    this.props.dispatch(NavigationState.pushRoute({
      key: 'RecoverPassword',
      title: 'Recover Password Screen'
    }));
    // ???
  },

  render() {
    const buttons = ['Teacher', 'Expert'];
    const {selectedIndex} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Welcome to SCOOL!'}
        </Text>
        <Text style={styles.loginText}>
          {'Log in as:'}
        </Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          containerStyle={styles.buttonGroup}
          textStyle={styles.buttonGroupText}
          selectedBackgroundColor='yellow'
          underlayColor='white'
          buttons={buttons} />

        <LoginForm
          submit={this.doLogin}
          recoverPassword={this.recoverPassword}
          />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 5
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#AAAAAA',
    marginBottom: 10,
    padding: 5
  },
  buttonGroup: {
    height: 40,
    backgroundColor: 'white'
  },
  buttonGroupText: {
    color: '#CCCCCC',
    fontSize: 18
  }
});

export default WelcomeView;
