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
  displayName: 'RegistrationForm',
  propTypes: {
    submit: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: ''
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
        <Text>Password confirmation:</Text>
        <TextInput
          ref='passwordConfirmation'
          style={styles.textInput}
          onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          secureTextEntry={true}
          value={this.state.passwordConfirmation}
          returnKeyType='done'
          onSubmitEditing={() => this.props.submit(this.state) }
        />

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.props.continue}
            title={'Continue'.toUpperCase()} />
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
  textInput: {
    height: 40,
    fontSize: 20,
    marginBottom: 20
  }
});
