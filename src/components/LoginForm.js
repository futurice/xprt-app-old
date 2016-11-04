import React, {PropTypes} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

import {
  Button
} from 'react-native-elements'

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
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password:</Text>
        <TextInput
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />

        <Button
          buttonStyle={styles.buttonStyle}
          icon={{name: 'lock-open'}}
          title="Log in"
          onPress={() => this.props.submit(this.state)}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  buttonStyle: {
    marginTop: 20
  }
});
