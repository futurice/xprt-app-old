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
    submit: PropTypes.func.isRequired,
    recoverPassword: PropTypes.func.isRequired
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
          returnKeyType="next"
          onSubmitEditing={() => this.refs['password'].focus()}
        />
        <Text>Password:</Text>
        <TextInput
          ref="password"
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
          returnKeyType="done"
          onSubmitEditing={() => this.props.submit(this.state) }
        />

        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          icon={{name: 'lock-open', color: 'black'}}
          title='Log in'
          onPress={() => this.props.submit(this.state)}
        />

        <Text
          style={styles.recoverPasswordTextStyle}
          onPress={() => this.props.recoverPassword(this.state)}
        >
          Forgot your password?
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'yellow'
  },
  buttonTextStyle: {
    color: 'black'
  },
  textInput: {
    height: 40,
    fontSize: 20
  },
  recoverPasswordTextStyle: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 30
  }
});
