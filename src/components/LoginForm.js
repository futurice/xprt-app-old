import React, {PropTypes} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

import {
  Button
} from 'react-native-elements';

export default React.createClass({
  displayName: 'LoginForm',
  propTypes: {
    submit: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      email: '',
      password: ''
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>E-mail:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          returnKeyType='next'
          onSubmitEditing={() => this.refs['password'].focus()}
        />
        <Text>Password:</Text>
        <TextInput
          ref='password'
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
          returnKeyType='done'
          onSubmitEditing={() => this.props.submit(this.state) }
        />

        <View style={styles.buttonContainer}>
          <Button
            raised
            style={styles.button}
            onPress={() => this.props.submit(this.state)}
            title={'Log in'.toUpperCase()} />
          <Text style={styles.orText}>OR</Text>
          <Button
            style={styles.button}
            onPress={this.props.register}
            title={'Create an account'.toUpperCase()} />
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 30
  },
  button: {
    flex: 1,
    padding: 30,
    flexGrow: 1,
    backgroundColor: '#D8D8D8'
  },
  orText: {
    textAlign: 'center',
    margin: 10
  },
  textInput: {
    height: 40,
    fontSize: 20,
    marginBottom: 20
  }
});
