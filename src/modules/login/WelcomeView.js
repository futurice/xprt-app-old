import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginForm from '../../components/LoginForm';

const WelcomeView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>
          {'You have to be logged on to view and manage your profile and collaborations'}
        </Text>
        <LoginForm submit={this.doLogin} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginText: {
    fontSize: 18,
    textAlign: 'left',
    color: '#454545',
    margin: 20
  }
});

export default WelcomeView;
