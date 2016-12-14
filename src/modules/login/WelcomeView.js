import * as NavigationState from '../navigation/NavigationState';
import * as AuthState from '../auth/AuthState';
import RecoverPasswordViewContainer from './RecoverPasswordViewContainer';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import LoginForm from '../../components/LoginForm';

const WelcomeView = React.createClass({
  getInitialState() {
    return {
      selectedIndex: 0,
      isRecoveringPassword: false
    };
  },

  updateIndex(selectedIndex) {
    this.setState({selectedIndex: selectedIndex});
  },

  doLogin(credentials) {
    // Always succeed with login for now
    this.props.dispatch(AuthState.onUserLoginSuccess());
    console.log(credentials);
  },

  recoverPassword() {
    this.setState({isRecoveringPassword: true})
  },

  backToSignIn() {
    this.setState({isRecoveringPassword: false})
  },

  render() {
    const buttons = ['Teacher', 'Expert'];
    const selectedIndex = this.state.selectedIndex;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'App Welcome screen'}
        </Text>
        <Text style={styles.loginText}>
          {'Welcome!'}
        </Text>
        <Text style={styles.loginText}>
          {'Here\'s how this works...'}
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.loginButtons}>
            <Button
              large
              raised
              buttonStyle={styles.button}
              onPress={this.props.register}
              title='Create Profile' />
            <Button
              large
              raised
              buttonStyle={styles.button}
              onPress={this.props.login}
              title='Existing Profile' />
          </View>
          <View style={styles.browseButtonContainer}>
            <Button
              large
              raised
              buttonStyle={styles.browseButton}
              onPress={this.props.browse}
              title='Browse Experts' />
          </View>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loginButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 7.5,
    marginRight: 7.5
  },
  browseButtonContainer: {
    flex: 1
  },
  browseButton: {
    marginTop: 15,
    padding: 30,
  },
  button: {
    marginTop: 15,
    marginLeft: 7.5,
    marginRight: 7.5,
    padding: 30,
    flexGrow: 1
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 20
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#AAAAAA',
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
