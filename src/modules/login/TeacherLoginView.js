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

const TeacherLoginView = React.createClass({
  getInitialState() {
    return {
      selectedIndex: 0,
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

  render() {
    const buttons = ['Teacher', 'Expert'];
    const selectedIndex = this.state.selectedIndex;

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
          />

        <Text
          style={styles.forgot}
          onPress={() => this.props.forgot()}
        >
          Forgot your password?
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  forgot: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
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

export default TeacherLoginView;
