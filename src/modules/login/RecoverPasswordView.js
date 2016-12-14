import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const RecoverPasswordView = React.createClass({
  getInitialState() {
    return {
      email: ''
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Recover your password'}
        </Text>
        <Text>E-mail:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />

        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          title='Recover Password'
          onPress={() => console.log('Recover Password Clicked!')}
        />

        <Text
          style={styles.signInTextStyle}
          onPress={() => this.props.backToSignIn()}
        >
          Sign in
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 30
  },
  textInput: {
    height: 40,
    fontSize: 20
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'yellow'
  },
  buttonTextStyle: {
    color: 'black'
  },
  signInTextStyle: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 30
  }
});

export default RecoverPasswordView;
